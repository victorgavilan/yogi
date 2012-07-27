var api = require('../api'),
    util = require('../util'),
    log = require('../log');

var mods = {
    init: function(options) {
        var module = options.parsed.argv.remain[0];
        if (!module) {
            module = util.findModule();
        }
        if (!module) {
            log.bail('please provide a module name');
        }
        log.info('fetching package.json for ' + module);
        api.get('/gallery/' + module + '/package.json', function(err, data) {
            log.log(JSON.stringify(data, null, 2));
        });
    },
    help: function() {
        return ['show <module>', 'fetches the package.json for <module>']
    }
};

util.mix(exports, mods);