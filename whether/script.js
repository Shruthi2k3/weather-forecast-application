var _0x21fb = ['onerror', 'querySelector', 'getCurrentPosition', 'addEventListener', 'GET', 'fetchWeather', '1717285dMBFZD', 'innerText', '.description', 'open', 'geolocation', '\x20km/h', '695433xqPFse', 'https://api.openweathermap.org/data/2.5/weather?q=', '1280311KVadgT', '1XbifQr', 'unable\x20to\x20connect\x20to\x20server', 'error', '.wind', 'Weather\x20in\x20', '&units=metric&appid=', 'server\x20error', '1CWBoey', 'parse', 'onload', '.png', 'search', 'wind', '.temp', '&q=', 'json', '1068308hyGznM', 'message', 'https://api.opencagedata.com/geocode/v1/json', 'weather', 'body', 'classList', '559127OtLDWy', 'No\x20weather\x20found.', 'keyup', 'remove', 'getLocation', 'src', 'backgroundImage', 'components', '872513IVRufn', 'city', 'displayWeather', '&pretty=1', '1406150OJMuFC', 'Wind\x20speed:\x20', 'then', 'click', 'log', 'error\x20msg:\x20', 'key', '2cad6041208649f7bacaf9013ad4ec2e', 'responseText', 'coords', '.search\x20button', 'key=', '.city', '.search-bar', '.humidity', 'longitude', 'loading', '800fd005579d27a234b5ea3722aeb935', 'results', 'apiKey', 'https://openweathermap.org/img/wn/', 'status'];
var _0x21ea = function(_0x972b0f, _0x30e828) {
    _0x972b0f = _0x972b0f - 0x6e;
    var _0x21fb36 = _0x21fb[_0x972b0f];
    return _0x21fb36;
};
var _0x5aedfd = _0x21ea;
(function(_0x5768ea, _0x7d2bf1) {
    var _0x3e5d6d = _0x21ea;
    while (!![]) {
        try {
            var _0x3e8ce3 = parseInt(_0x3e5d6d(0x70)) + -parseInt(_0x3e5d6d(0x98)) * -parseInt(_0x3e5d6d(0x99)) + -parseInt(_0x3e5d6d(0xa0)) * parseInt(_0x3e5d6d(0xaf)) + -parseInt(_0x3e5d6d(0xa9)) + parseInt(_0x3e5d6d(0x96)) + -parseInt(_0x3e5d6d(0x90)) + parseInt(_0x3e5d6d(0x74));
            if (_0x3e8ce3 === _0x7d2bf1) break;
            else _0x5768ea['push'](_0x5768ea['shift']());
        } catch (_0x5709fe) {
            _0x5768ea['push'](_0x5768ea['shift']());
        }
    }
}(_0x21fb, 0xde177));
let weather = {
        'apiKey': _0x5aedfd(0x85),
        'fetchWeather': function(_0x48fe10) {
            var _0x2bf4bf = _0x5aedfd;
            fetch(_0x2bf4bf(0x97) + _0x48fe10 + _0x2bf4bf(0x9e) + this[_0x2bf4bf(0x87)])[_0x2bf4bf(0x76)](_0x5253a3 => {
                var _0x453464 = _0x2bf4bf;
                if (!_0x5253a3['ok']) {
                    alert(_0x453464(0xb0));
                    throw new Error(_0x453464(0xb0));
                }
                return _0x5253a3[_0x453464(0xa8)]();
            })[_0x2bf4bf(0x76)](_0x9f3390 => this[_0x2bf4bf(0x72)](_0x9f3390));
        },
        'displayWeather': function(_0x5a22e0) {
            var _0x4f9a14 = _0x5aedfd;
            const {
                name: _0x235202
            } = _0x5a22e0, {
                icon: _0x25ac58,
                description: _0x34b3de
            } = _0x5a22e0[_0x4f9a14(0xac)][0x0], {
                temp: _0x533206,
                humidity: _0x3bbe48
            } = _0x5a22e0['main'], {
                speed: _0x29fb05
            } = _0x5a22e0[_0x4f9a14(0xa5)];
            document[_0x4f9a14(0x8b)](_0x4f9a14(0x80))[_0x4f9a14(0x91)] = _0x4f9a14(0x9d) + _0x235202, document['querySelector']('.icon')[_0x4f9a14(0xb4)] = _0x4f9a14(0x88) + _0x25ac58 + _0x4f9a14(0xa3), document[_0x4f9a14(0x8b)](_0x4f9a14(0x92))[_0x4f9a14(0x91)] = _0x34b3de, document['querySelector'](_0x4f9a14(0xa6))[_0x4f9a14(0x91)] = _0x533206 + '°C', document[_0x4f9a14(0x8b)](_0x4f9a14(0x82))[_0x4f9a14(0x91)] = 'Humidity:\x20' + _0x3bbe48 + '%', document['querySelector'](_0x4f9a14(0x9c))['innerText'] = _0x4f9a14(0x75) + _0x29fb05 + _0x4f9a14(0x95), document[_0x4f9a14(0x8b)]('.weather')[_0x4f9a14(0xae)][_0x4f9a14(0xb2)](_0x4f9a14(0x84)), document[_0x4f9a14(0xad)]['style'][_0x4f9a14(0x6e)] = 'url(\x27https://source.unsplash.com/1600x900/?' + _0x235202 + '\x27)';
        },
        'search': function() {
            var _0x579e30 = _0x5aedfd;
            this[_0x579e30(0x8f)](document[_0x579e30(0x8b)](_0x579e30(0x81))['value']);
        }
    },
    geocode = {
        'reverseGeocode': function(_0x3964ca, _0x243ff6) {
            var _0x5a92e0 = _0x5aedfd,
                _0x467eb7 = _0x5a92e0(0x7b),
                _0x416f79 = _0x5a92e0(0xab),
                _0x2412e3 = _0x416f79 + '?' + _0x5a92e0(0x7f) + _0x467eb7 + _0x5a92e0(0xa7) + encodeURIComponent(_0x3964ca + ',' + _0x243ff6) + _0x5a92e0(0x73) + '&no_annotations=1',
                _0x3eb683 = new XMLHttpRequest();
            _0x3eb683[_0x5a92e0(0x93)](_0x5a92e0(0x8e), _0x2412e3, !![]), _0x3eb683[_0x5a92e0(0xa2)] = function() {
                var _0x456f1d = _0x5a92e0;
                if (_0x3eb683[_0x456f1d(0x89)] == 0xc8) {
                    var _0x289eaa = JSON[_0x456f1d(0xa1)](_0x3eb683['responseText']);
                    weather[_0x456f1d(0x8f)](_0x289eaa[_0x456f1d(0x86)][0x0][_0x456f1d(0x6f)][_0x456f1d(0x71)]), console[_0x456f1d(0x78)](_0x289eaa[_0x456f1d(0x86)][0x0][_0x456f1d(0x6f)][_0x456f1d(0x71)]);
                } else {
                    if (_0x3eb683['status'] <= 0x1f4) {
                        console[_0x456f1d(0x78)]('unable\x20to\x20geocode!\x20Response\x20code:\x20' + _0x3eb683[_0x456f1d(0x89)]);
                        var _0x289eaa = JSON[_0x456f1d(0xa1)](_0x3eb683[_0x456f1d(0x7c)]);
                        console[_0x456f1d(0x78)](_0x456f1d(0x79) + _0x289eaa[_0x456f1d(0x89)][_0x456f1d(0xaa)]);
                    } else console['log'](_0x456f1d(0x9f));
                }
            }, _0x3eb683[_0x5a92e0(0x8a)] = function() {
                var _0x2ffbd5 = _0x5a92e0;
                console[_0x2ffbd5(0x78)](_0x2ffbd5(0x9a));
            }, _0x3eb683['send']();
        },
        'getLocation': function() {
            var _0x5e9588 = _0x5aedfd;

            function _0x4fbf45(_0x3ba729) {
                var _0x3e1a00 = _0x21ea;
                geocode['reverseGeocode'](_0x3ba729[_0x3e1a00(0x7d)]['latitude'], _0x3ba729[_0x3e1a00(0x7d)][_0x3e1a00(0x83)]);
            }
            navigator[_0x5e9588(0x94)] ? navigator['geolocation'][_0x5e9588(0x8c)](_0x4fbf45, console[_0x5e9588(0x9b)]) : weather[_0x5e9588(0x8f)]('Denver');
        }
    };
document[_0x5aedfd(0x8b)](_0x5aedfd(0x7e))[_0x5aedfd(0x8d)](_0x5aedfd(0x77), function() {
    var _0x535c3e = _0x5aedfd;
    weather[_0x535c3e(0xa4)]();
}), document[_0x5aedfd(0x8b)](_0x5aedfd(0x81))[_0x5aedfd(0x8d)](_0x5aedfd(0xb1), function(_0x22970a) {
    var _0x57d0eb = _0x5aedfd;
    _0x22970a[_0x57d0eb(0x7a)] == 'Enter' && weather[_0x57d0eb(0xa4)]();
}), geocode[_0x5aedfd(0xb3)]();