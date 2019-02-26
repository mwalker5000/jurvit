// Init style shamelessly stolen from jQuery http://jquery.com
var Froogaloop = (function() {
  // Define a local copy of Froogaloop

  function Froogaloop(iframe) {
    // The Froogaloop object is actually just the init constructor
    return new Froogaloop.fn.init(iframe);
  }

  var eventCallbacks = {},
    hasWindowEvent = false,
    isReady = false,
    slice = Array.prototype.slice,
    playerOrigin = '*';

  Froogaloop.fn = Froogaloop.prototype = {
    element: null,
    init: function(iframe) {
      if (typeof iframe === "string") {
        iframe = document.getElementById(iframe);
      }
      this.element = iframe;
      return this;
    },
    /*
     * Calls a function to act upon the player.
     *
     * @param {string} method The name of the Javascript API method to call. Eg: 'play'.
     * @param {Array|Function} valueOrCallback params Array of parameters to pass when calling an API method
     *                                or callback function when the method returns a value.
     */
    api: function(method, valueOrCallback) {
      if (!this.element || !method) {
        return false;
      }

      var self = this,
        element = self.element,
        target_id = element.id !== '' ? element.id : null,
        params = !isFunction(valueOrCallback) ? valueOrCallback : null,
        callback = isFunction(valueOrCallback) ? valueOrCallback : null;

      // Store the callback for get functions
      if (callback) {
        storeCallback(method, callback, target_id);
      }

      postMessage(method, params, element);
      return self;
    },

    /*
     * Registers an event listener and a callback function that gets called when the event fires.
     *
     * @param eventName (String): Name of the event to listen for.
     * @param callback (Function): Function that should be called when the event fires.
     */
    addEvent: function(eventName, callback) {
      if (!this.element) {
        return false;
      }

      var self = this,
        element = self.element,
        target_id = element.id !== '' ? element.id : null;


      storeCallback(eventName, callback, target_id);

      // The ready event is not registered via postMessage. It fires regardless.
      if (eventName != 'ready') {
        postMessage('addEventListener', eventName, element);
      } else if (eventName == 'ready' && isReady) {
        callback.call(null, target_id);
      }

      return self;
    },

    /*
     * Unregisters an event listener that gets called when the event fires.
     *
     * @param eventName (String): Name of the event to stop listening for.
     */
    removeEvent: function(eventName) {
      if (!this.element) {
        return false;
      }

      var self = this,
        element = self.element,
        target_id = element.id !== '' ? element.id : null,
        removed = removeCallback(eventName, target_id);

      // The ready event is not registered
      if (eventName != 'ready' && removed) {
        postMessage('removeEventListener', eventName, element);
      }
    }
  };

  /**
   * Handles posting a message to the parent window.
   *
   * @param method (String): name of the method to call inside the player. For api calls
   * this is the name of the api method (api_play or api_pause) while for events this method
   * is api_addEventListener.
   * @param params (Object or Array): List of parameters to submit to the method. Can be either
   * a single param or an array list of parameters.
   * @param target (HTMLElement): Target iframe to post the message to.
   */

  function postMessage(method, params, target) {
    if (!target.contentWindow.postMessage) {
      return false;
    }

    var data = JSON.stringify({
      method: method,
      value: params
    });

    target.contentWindow.postMessage(data, playerOrigin);
  }

  /**
   * Event that fires whenever the window receives a message from its parent
   * via window.postMessage.
   */

  function onMessageReceived(event) {
    var data, method;

    try {
      data = JSON.parse(event.data);
      method = data.event || data.method;
    } catch (e) {
      //fail silently... like a ninja!
    }

    if (method == 'ready' && !isReady) {
      isReady = true;
    }

    // Handles messages from the vimeo player only
    if (!(/^https?:\/\/player.vimeo.com/).test(event.origin)) {
      return false;
    }

    if (playerOrigin === '*') {
      playerOrigin = event.origin;
    }

    var value = data.value,
      eventData = data.data,
      target_id = target_id === '' ? null : data.player_id,


      callback = getCallback(method, target_id),
      params = [];

    if (!callback) {
      return false;
    }

    if (value !== undefined) {
      params.push(value);
    }

    if (eventData) {
      params.push(eventData);
    }

    if (target_id) {
      params.push(target_id);
    }

    return params.length > 0 ? callback.apply(null, params) : callback.call();
  }


  /**
   * Stores submitted callbacks for each iframe being tracked and each
   * event for that iframe.
   *
   * @param eventName (String): Name of the event. Eg. api_onPlay
   * @param callback (Function): Function that should get executed when the
   * event is fired.
   * @param target_id (String) [Optional]: If handling more than one iframe then
   * it stores the different callbacks for different iframes based on the iframe's
   * id.
   */

  function storeCallback(eventName, callback, target_id) {
    if (target_id) {
      if (!eventCallbacks[target_id]) {
        eventCallbacks[target_id] = {};
      }
      eventCallbacks[target_id][eventName] = callback;
    } else {
      eventCallbacks[eventName] = callback;
    }
  }

  /**
   * Retrieves stored callbacks.
   */

  function getCallback(eventName, target_id) {
    if (target_id) {
      console.log('target_id: ' + target_id);
      console.log('eventName: ' + eventName);
      try {
        return eventCallbacks[target_id][eventName];
      } catch (e) {
        console.log(e);
      }
    } else {
      return eventCallbacks[eventName];
    }
  }

  function removeCallback(eventName, target_id) {
    if (target_id && eventCallbacks[target_id]) {
      if (!eventCallbacks[target_id][eventName]) {
        return false;
      }
      eventCallbacks[target_id][eventName] = null;
    } else {
      if (!eventCallbacks[eventName]) {
        return false;
      }
      eventCallbacks[eventName] = null;
    }

    return true;
  }

  function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }

  function isArray(obj) {
    return toString.call(obj) === '[object Array]';
  }

  // Give the init function the Froogaloop prototype for later instantiation
  Froogaloop.fn.init.prototype = Froogaloop.fn;

  // Listens for the message event.
  // W3C
  if (window.addEventListener) {
    window.addEventListener('message', onMessageReceived, false);
  }
  // IE
  else {
    window.attachEvent('onmessage', onMessageReceived);
  }

  // Expose froogaloop to the global object
  return (window.Froogaloop = window.$f = Froogaloop);

})();

/**
 * DTM vimeo video *
 *
 * This file provides functionality to track vimeo video interactions in DTM.
 * This script should be used in parallel with the vimeo froogaloop API in order to function correctly.<br>
 * In DTM, create a pageload rule that triggers at the bottom of the page. Include the Froogaloop script and include
 * this script in the 3rd party tags as a sequential javascript. Make sure the Froogaloop
 * scripts is added first, then this vimeo script.<br>
 * If the tracking will use the AA media module, set _sdi.dtm.video.vimeo.useDC = false, otherwise
 * it should be set to true, and the direct call rules in the script should be created.<br>
 * If using AA, there should be a data element named "rsid" that returns the correct
 * report suite ID.
 * @example <caption>Be sure to instantiate the objects</caption>
 var _sdi = window._sdi = window._sdi || {};
 _sdi.dtm = _sdi.dtm || {};
 _sdi.dtm.video = _sdi.dtm.video || {};
 * @namespace vimeo
 * @memberof _sdi.dtm.video
 * @requires Froogaloop
 * @requires jQuery
 * @requires _satellite
 */
jQuery(function() {
 var _sdi = window._sdi || {};
 _sdi.dtm = _sdi.dtm || {};
 _sdi.dtm.video = _sdi.dtm.video || {};
  
  _sdi.dtm.video.vimeo = { 
    videos: {},
    setDuration: function(id) {
      if (!_sdi.dtm.video.vimeo.videos[id].duration) {
        Froogaloop(String(id)).api('getDuration', function(value, video_id) {
          _sdi.dtm.video.vimeo.videos[video_id].duration = value;
        });
      }
    },
    playerName: 'Vimeo',
    useDC: false,
    sc: {
      track: true,
      s: function() {
        return s_gi(_satellite.getVar('rsid'));
      }
    }
  };

  /**
   *
   * @desc This function finds all the vimeo iframes on the page and assigns
   * events to the players
   */
  var vid = jQuery('iframe[src*="player.vimeo.com"]');
  if (vid && vid.length > 0) {
    for (var i = 0; i < vid.length; i++) {
      // make sure the api is loaded on each video
      var src = vid[i].src;
      var id = (src.match(/player\.vimeo\.com\/video\/([A-Za-z0-9]+)/i))[1];
      var sc = _sdi.dtm.video.vimeo.sc || {};
      if (!src.match(/api=1/i)) {
        src = src + (src.indexOf('?') == -1 ? '?' : '&') + 'api=1';
      }
      src = src.replace(/&player_id(=[^&]*)?|^player_id(=[^&]*)?&?/, "");
      src += '&player_id=' + id;
      vid[i].src = src;
      vid[i].id = id;
      _satellite.notify('VIMEO ID: ' + id);
      _sdi.dtm.video.vimeo.videos[id] = {
        state: 'created',
        duration: 0,
        title: '',
        started: 0,
        position: 0,
        player: {}
      };

      jQuery.ajax({
        dataType: "json",
        type: "get",
        url: "https://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/" + id,
        async: false,
        success: function(data) {
          _satellite.notify('AJAX Vimeo: data.title=' + data.title);
          _sdi.dtm.video.vimeo.videos[String(data.video_id)].title = data.title.toLowerCase();
          _sdi.dtm.video.vimeo.videos[String(data.video_id)].duration = data.duration;
        }
      });


      /**
       * @desc Vimeo video listeners
       */
      _sdi.dtm.video.vimeo.videos[id].player = Froogaloop(String(id));
      var player = _sdi.dtm.video.vimeo.videos[id].player;

      player.addEvent('ready', function(id) {
        _satellite.notify('VIMEO player ID: ' + id + ' is ready!');
        var froogPlayer = $f(id);
        /**
         * @desc Play listener
         */
        froogPlayer.addEvent('play', function(e) {
          var vid = _sdi.dtm.video.vimeo.videos[id];
          // video hasn't started yet
          if (!vid.started || vid.state == 'finished') {
            vid.started = true;
            _satellite.notify('open', e);
            if (!_sdi.dtm.video.vimeo.useDC) {
              _satellite.setVar('mediaPlayerName', 'vimeo');
              sc.s().Media.open(vid.title, vid.duration, _sdi.dtm.video.vimeo.playerName);
            } else {
              _satellite.track('vimeoStart');
            }
          }
          vid.state = 'playing';
          _satellite.notify('Vimeo Play');
          _satellite.notify('vid.title=' + vid.title);
          _satellite.notify('vid.position=' + vid.position);
          //Call the Analytics Media Funtion to Play the Video
          if (!_sdi.dtm.video.vimeo.useDC) {
            _satellite.setVar('mediaPlayerName', 'vimeo');
            sc.s().Media.play(vid.title, vid.position);
          } else {
            _satellite.track('vimeoPlay');
          }

        });
        /**
         * @desc Pause listener
         */
        froogPlayer.addEvent('pause', function(e) {
          var vid = _sdi.dtm.video.vimeo.videos[id];
          vid.state = 'paused';
          _satellite.notify('Vimeo Pause');
          //Call the Analytics Media Funtion to Stop the Video
          if (!_sdi.dtm.video.vimeo.useDC) {
            _satellite.setVar('mediaPlayerName', 'vimeo');
            sc.s().Media.stop(vid.title, vid.position);
          } else {
            _satellite.track('vimeoPause');
          }
        });
        /**
         * @desc Finish listener
         */
        froogPlayer.addEvent('finish', function(e) {
          var vid = _sdi.dtm.video.vimeo.videos[id];
          vid.state = 'finished';
          _satellite.notify('Vimeo Finish');
          //Call the Analytics Media Funtion to Complete and Close the Video
          if (!_sdi.dtm.video.vimeo.useDC) {
            _satellite.setVar('mediaPlayerName', 'vimeo');
            sc.s().Media.complete(vid.title, vid.position);
            sc.s().Media.close(vid.title);
          } else {
            _satellite.track('vimeoComplete');
          }

        });
        /**
         * @desc Seek listener
         */
        froogPlayer.addEvent('seek', function(data, e) {
          var vid = _sdi.dtm.video.vimeo.videos[id];
          if (!_sdi.dtm.video.vimeo.useDC) {
            _satellite.setVar('mediaPlayerName', 'vimeo');
            // pause the video first
            sc.s().Media.stop(vid.title, vid.position);
            // play the video at the new time, then pause it
            sc.s().Media.play(vid.title, data.seconds);
            if (vid.state == 'paused') {
              sc.s().Media.stop(vid.title, data.seconds);
            }
          } else {
            _satellite.track('vimeoSeek');
          }

          vid.position = data.seconds;
        });
        froogPlayer.addEvent('playProgress', function(data, e) {
          _satellite.notify('Vimeo Progress');
          var vid = _sdi.dtm.video.vimeo.videos[id];
          vid.position = data.seconds;
        });
      });
    }
  }
});

