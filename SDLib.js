/**
 * SDLib.js a JavaScript Library.
 * Copyright (C) 2013  Saurin Dashadia
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see [http://www.gnu.org/licenses/].
 */


var SDLib = {
    /**
     *
     * @param element       An HTML canvas element
     * @param dimension     Rendering context
     * @returns {*}
     * @constructor
     */
    Canvas: function (element, dimension) {
        // check for element
        if (!element || element.nodeName != "CANVAS") {
            console.log('SDLib: Element is not canvas.');
            return false;
        }

        // set default dimension
        if (!dimension)  dimension = "2d";

        // check browser support for canvas
        if (element.getContext) {
            // global canvas context
            var _context = element.getContext(dimension);
        } else {
            console.log('SDLib: Canvas not supported by browser.')
            return false;
        }

        return {
            context: _context,

            /**
             *
             * @param {number} args.left
             * @param {number} args.top
             * @param {number} args.height
             * @param {number} args.width
             * @param {string} args.backgroundColor
             * @param {string} args.borderColor
             * @param {number} args.borderWidth
             *
             * @returns {{}}
             *
             * @constructor
             */
            Rect: function (args) {
                _left           = args.left             || 0;
                _top            = args.top              || 0;
                _height         = args.height           || 0;
                _width          = args.width            || 0;

                _fillStyle      = args.backgroundColor  || '#000000';
                _strokeStyle    = args.borderColor      || '#000000';
                _lineWidth      = args.borderWidth      || 1;

                return {
                    Fill: function () {
                        _context.fillStyle = _fillStyle;
                        _context.fillRect(_left, _top, _width, _height);
                    },

                    Strock: function () {
                        _context.strokeStyle = _strokeStyle;
                        _context.lineWidth  = _lineWidth;
                        _context.strokeRect(_left, _top, _width, _height);
                    },

                    Clear: function(){
                        _context.clearRect(_left, _top, _width, _height);
                    }
                }
            }

            /*Draw: function (args) {

            },

            // line object
            line: function (args) {
                _color = (args.color) ? args.color : '#000000';
                _start = (args.start) ? args.start : [0, 0];
                _end = (args.end) ? args.end : [0, 0];
                _width = (args.width) ? args.width : 1;

                return{
                    start: _start,
                    end: _end,
                    color: _color,
                    width: _width,

                    setPos: function (args) {
                        this.start = (args.start) ? args.start : this.start;
                        this.end = (args.end) ? args.end : this.end;
                    },

                    setColor: function (clr) {
                        this.color = (clr) ? clr : this.color;
                    },

                    draw: function () {
                        _context.strokeStyle = this.color;
                        _context.beginPath();
                        _context.moveTo(this.start[0], this.start[1]);
                        _context.lineTo(this.end[0], this.end[1]);
                        _context.stroke();

                        //return this;
                    }
                }
            }*/
        }
    }
}