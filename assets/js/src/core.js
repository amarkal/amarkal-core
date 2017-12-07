exports.Core = {
    
    Utility: {
        validateType: function(value, type) {
            if('array' === type) {
                return Array.isArray(value);
            }
            if('object' === type) {
                return Amarkal.Core.Object.isObject(value);
            }
            return typeof value === type;
        }
    },

    Array: {
        /**
         * Check if two arrays are identical (order is important)
         */
        equal: function(a, b) {
            if(!Array.isArray(a) || !Array.isArray(b)) return false;
            return a.length === b.length && a.every(function(v) { return b[i] === v; });
        },

        /**
         * Check if two arrays are have the same elements (order is NOT important)
         */
        same: function(a, b) {
            if(!Array.isArray(a) || !Array.isArray(b)) return false;
            return a.length === b.length && a.every(function(v, i) { return b.indexOf(v) !== -1; });
        }
    },

    Object: {

        /**
         * Check if the given variable is an object
         */
        isObject: function(obj) {
            return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
        },

        /**
         * Check if the given objects are identical
         */
        equal: function(a, b) {
            if(!Amarkal.Core.Object.isObject(a) || !Amarkal.Core.Object.isObject(b)) return false;
            
            // Create arrays of property names
            var aProps = Object.keys(a);
            var bProps = Object.keys(b);

            // If number of properties is different,
            // objects are not equivalent
            if (aProps.length !== bProps.length) {
                return false;
            }

            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i];

                if(Array.isArray(a[propName]) && !Amarkal.Core.Array.same(a[propName], b[propName])) {
                    return false;
                }

                // If values of same property are not equal,
                // objects are not equivalent
                if (a[propName] !== b[propName]) {
                    return false;
                }
            }

            // If we made it this far, objects
            // are considered equivalent
            return true;
        }
    }
};