/*

The MIT License (MIT)

Copyright (c) 2016 Tom Zoehner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

if (typeof EMFJS === 'undefined') {
	(typeof window !== 'undefined' ? window : this).EMFJS = {
		Error: function(message) {
			this.message = message;
		},
		loggingEnabled: true,
		log: function(message){
			if(EMFJS.loggingEnabled) {
				console.log(message);
			}
		},
		GDI: {
			RecordType: {
				EMR_POLYBEZIER: 0x00000002,
				EMR_POLYGON: 0x00000003,
				EMR_POLYLINE: 0x00000004,
				EMR_POLYBEZIERTO: 0x00000005,
				EMR_POLYLINETO: 0x00000006,
				EMR_POLYPOLYLINE: 0x00000007,
				EMR_POLYPOLYGON: 0x00000008,
				EMR_SETWINDOWEXTEX: 0x00000009,
				EMR_SETWINDOWORGEX: 0x0000000A,
				EMR_SETVIEWPORTEXTEX: 0x0000000B,
				EMR_SETVIEWPORTORGEX: 0x0000000C,
				EMR_SETBRUSHORGEX: 0x0000000D,
				EMR_EOF: 0x0000000E,
				EMR_SETPIXELV: 0x0000000F,
				EMR_SETMAPPERFLAGS: 0x00000010,
				EMR_SETMAPMODE: 0x00000011,
				EMR_SETBKMODE: 0x00000012,
				EMR_SETPOLYFILLMODE: 0x00000013,
				EMR_SETROP2: 0x00000014,
				EMR_SETSTRETCHBLTMODE: 0x00000015,
				EMR_SETTEXTALIGN: 0x00000016,
				EMR_SETCOLORADJUSTMENT: 0x00000017,
				EMR_SETTEXTCOLOR: 0x00000018,
				EMR_SETBKCOLOR: 0x00000019,
				EMR_OFFSETCLIPRGN: 0x0000001A,
				EMR_MOVETOEX: 0x0000001B,
				EMR_SETMETARGN: 0x0000001C,
				EMR_EXCLUDECLIPRECT: 0x0000001D,
				EMR_INTERSECTCLIPRECT: 0x0000001E,
				EMR_SCALEVIEWPORTEXTEX: 0x0000001F,
				EMR_SCALEWINDOWEXTEX: 0x00000020,
				EMR_SAVEDC: 0x00000021,
				EMR_RESTOREDC: 0x00000022,
				EMR_SETWORLDTRANSFORM: 0x00000023,
				EMR_MODIFYWORLDTRANSFORM: 0x00000024,
				EMR_SELECTOBJECT: 0x00000025,
				EMR_CREATEPEN: 0x00000026,
				EMR_CREATEBRUSHINDIRECT: 0x00000027,
				EMR_DELETEOBJECT: 0x00000028,
				EMR_ANGLEARC: 0x00000029,
				EMR_ELLIPSE: 0x0000002A,
				EMR_RECTANGLE: 0x0000002B,
				EMR_ROUNDRECT: 0x0000002C,
				EMR_ARC: 0x0000002D,
				EMR_CHORD: 0x0000002E,
				EMR_PIE: 0x0000002F,
				EMR_SELECTPALETTE: 0x00000030,
				EMR_CREATEPALETTE: 0x00000031,
				EMR_SETPALETTEENTRIES: 0x00000032,
				EMR_RESIZEPALETTE: 0x00000033,
				EMR_REALIZEPALETTE: 0x00000034,
				EMR_EXTFLOODFILL: 0x00000035,
				EMR_LINETO: 0x00000036,
				EMR_ARCTO: 0x00000037,
				EMR_POLYDRAW: 0x00000038,
				EMR_SETARCDIRECTION: 0x00000039,
				EMR_SETMITERLIMIT: 0x0000003A,
				EMR_BEGINPATH: 0x0000003B,
				EMR_ENDPATH: 0x0000003C,
				EMR_CLOSEFIGURE: 0x0000003D,
				EMR_FILLPATH: 0x0000003E,
				EMR_STROKEANDFILLPATH: 0x0000003F,
				EMR_STROKEPATH: 0x00000040,
				EMR_FLATTENPATH: 0x00000041,
				EMR_WIDENPATH: 0x00000042,
				EMR_SELECTCLIPPATH: 0x00000043,
				EMR_ABORTPATH: 0x00000044,
				EMR_COMMENT: 0x00000046,
				EMR_FILLRGN: 0x00000047,
				EMR_FRAMERGN: 0x00000048,
				EMR_INVERTRGN: 0x00000049,
				EMR_PAINTRGN: 0x0000004A,
				EMR_EXTSELECTCLIPRGN: 0x0000004B,
				EMR_BITBLT: 0x0000004C,
				EMR_STRETCHBLT: 0x0000004D,
				EMR_MASKBLT: 0x0000004E,
				EMR_PLGBLT: 0x0000004F,
				EMR_SETDIBITSTODEVICE: 0x00000050,
				EMR_STRETCHDIBITS: 0x00000051,
				EMR_EXTCREATEFONTINDIRECTW: 0x00000052,
				EMR_EXTTEXTOUTA: 0x00000053,
				EMR_EXTTEXTOUTW: 0x00000054,
				EMR_POLYBEZIER16: 0x00000055,
				EMR_POLYGON16: 0x00000056,
				EMR_POLYLINE16: 0x00000057,
				EMR_POLYBEZIERTO16: 0x00000058,
				EMR_POLYLINETO16: 0x00000059,
				EMR_POLYPOLYLINE16: 0x0000005A,
				EMR_POLYPOLYGON16: 0x0000005B,
				EMR_POLYDRAW16: 0x0000005C,
				EMR_CREATEMONOBRUSH: 0x0000005D,
				EMR_CREATEDIBPATTERNBRUSHPT: 0x0000005E,
				EMR_EXTCREATEPEN: 0x0000005F,
				EMR_POLYTEXTOUTA: 0x00000060,
				EMR_POLYTEXTOUTW: 0x00000061,
				EMR_SETICMMODE: 0x00000062,
				EMR_CREATECOLORSPACE: 0x00000063,
				EMR_SETCOLORSPACE: 0x00000064,
				EMR_DELETECOLORSPACE: 0x00000065,
				EMR_GLSRECORD: 0x00000066,
				EMR_GLSBOUNDEDRECORD: 0x00000067,
				EMR_PIXELFORMAT: 0x00000068,
				EMR_DRAWESCAPE: 0x00000069,
				EMR_EXTESCAPE: 0x0000006A,
				EMR_SMALLTEXTOUT: 0x0000006C,
				EMR_FORCEUFIMAPPING: 0x0000006D,
				EMR_NAMEDESCAPE: 0x0000006E,
				EMR_COLORCORRECTPALETTE: 0x0000006F,
				EMR_SETICMPROFILEA: 0x00000070,
				EMR_SETICMPROFILEW: 0x00000071,
				EMR_ALPHABLEND: 0x00000072,
				EMR_SETLAYOUT: 0x00000073,
				EMR_TRANSPARENTBLT: 0x00000074,
				EMR_GRADIENTFILL: 0x00000076,
				EMR_SETLINKEDUFIS: 0x00000077,
				EMR_SETTEXTJUSTIFICATION: 0x00000078,
				EMR_COLORMATCHTOTARGETW: 0x00000079,
				EMR_CREATECOLORSPACEW: 0x0000007A
			},
			MetafileEscapes: {
				NEWFRAME: 0x0001,
				ABORTDOC: 0x0002,
				NEXTBAND: 0x0003,
				SETCOLORTABLE: 0x0004,
				GETCOLORTABLE: 0x0005,
				FLUSHOUT: 0x0006,
				DRAFTMODE: 0x0007,
				QUERYESCSUPPORT: 0x0008,
				SETABORTPROC: 0x0009,
				STARTDOC: 0x000a,
				ENDDOC: 0x000b,
				GETPHYSPAGESIZE: 0x000c,
				GETPRINTINGOFFSET: 0x000d,
				GETSCALINGFACTOR: 0x000e,
				META_ESCAPE_ENHANCED_METAFILE: 0x000f,
				SETPENWIDTH: 0x0010,
				SETCOPYCOUNT: 0x0011,
				SETPAPERSOURCE: 0x0012,
				PASSTHROUGH: 0x0013,
				GETTECHNOLOGY: 0x0014,
				SETLINECAP: 0x0015,
				SETLINEJOIN: 0x0016,
				SETMITERLIMIT: 0x0017,
				BANDINFO: 0x0018,
				DRAWPATTERNRECT: 0x0019,
				GETVECTORPENSIZE: 0x001a,
				GETVECTORBRUSHSIZE: 0x001b,
				ENABLEDUPLEX: 0x001c,
				GETSETPAPERBINS: 0x001d,
				GETSETPRINTORIENT: 0x001e,
				ENUMPAPERBINS: 0x001f,
				SETDIBSCALING: 0x0020,
				EPSPRINTING: 0x0021,
				ENUMPAPERMETRICS: 0x0022,
				GETSETPAPERMETRICS: 0x0023,
				POSTSCRIPT_DATA: 0x0025,
				POSTSCRIPT_IGNORE: 0x0026,
				GETDEVICEUNITS: 0x002a,
				GETEXTENDEDTEXTMETRICS: 0x0100,
				GETPAIRKERNTABLE: 0x0102,
				EXTTEXTOUT: 0x0200,
				GETFACENAME: 0x0201,
				DOWNLOADFACE: 0x0202,
				METAFILE_DRIVER: 0x0801,
				QUERYDIBSUPPORT: 0x0c01,
				BEGIN_PATH: 0x1000,
				CLIP_TO_PATH: 0x1001,
				END_PATH: 0x1002,
				OPEN_CHANNEL: 0x100e,
				DOWNLOADHEADER: 0x100f,
				CLOSE_CHANNEL: 0x1010,
				POSTSCRIPT_PASSTHROUGH: 0x1013,
				ENCAPSULATED_POSTSCRIPT: 0x1014,
				POSTSCRIPT_IDENTIFY: 0x1015,
				POSTSCRIPT_INJECTION: 0x1016,
				CHECKJPEGFORMAT: 0x1017,
				CHECKPNGFORMAT: 0x1018,
				GET_PS_FEATURESETTING: 0x1019,
				MXDC_ESCAPE: 0x101a,
				SPCLPASSTHROUGH2: 0x11d8
			},
			MapMode: {
				MM_TEXT: 1,
				MM_LOMETRIC: 2,
				MM_HIMETRIC: 3,
				MM_LOENGLISH: 4,
				MM_HIENGLISH: 5,
				MM_TWIPS: 6,
				MM_ISOTROPIC: 7,
				MM_ANISOTROPIC: 8
			},
			StretchMode: {
				BLACKONWHITE: 1,
				WHITEONBLACK: 2,
				COLORONCOLOR: 3,
				HALFTONE: 4
			},
			TextAlignmentMode: {
				TA_UPDATECP: 1,
				TA_RIGHT: 2,
				TA_CENTER: 6,
				TA_BOTTOM: 8,
				TA_BASELINE: 24,
				TA_RTLREADING: 256
			},
			MixMode: {
				TRANSPARENT: 1,
				OPAQUE: 2
			},
			VerticalTextAlignmentMode: {
				VTA_BOTTOM: 2,
				VTA_CENTER: 6,
				VTA_LEFT: 8,
				VTA_BASELINE: 24
			},
			BrushStyle: {
				BS_SOLID: 0,
				BS_NULL: 1,
				BS_HATCHED: 2,
				BS_PATTERN: 3,
				BS_INDEXED: 4,
				BS_DIBPATTERN: 5,
				BS_DIBPATTERNPT: 6,
				BS_PATTERN8X8: 7,
				BS_DIBPATTERN8X8: 8,
				BS_MONOPATTERN: 9
			},
			PenStyle: {
				PS_SOLID: 0,
				PS_DASH: 1,
				PS_DOT: 2,
				PS_DASHDOT: 3,
				PS_DASHDOTDOT: 4,
				PS_NULL: 5,
				PS_INSIDEFRAME: 6,
				PS_USERSTYLE: 7,
				PS_ALTERNATE: 8,
				PS_ENDCAP_SQUARE: 256,
				PS_ENDCAP_FLAT: 512,
				PS_JOIN_BEVEL: 4096,
				PS_JOIN_MITER: 8192
			},
			PolyFillMode: {
				ALTERNATE: 1,
				WINDING: 2
			},
			ColorUsage: {
				DIB_RGB_COLORS: 0,
				DIB_PAL_COLORS: 1,
				DIB_PAL_INDICES: 2
			},
			PaletteEntryFlag: {
				PC_RESERVED: 1,
				PC_EXPLICIT: 2,
				PC_NOCOLLAPSE: 4
			},
			BitmapCompression: {
				BI_RGB: 0,
				BI_RLE8: 1,
				BI_RLE4: 2,
				BI_BITFIELDS: 3,
				BI_JPEG: 4,
				BI_PNG: 5
			},
		},
		_uniqueId: 0,
		_makeUniqueId: function(prefix) {
			return "EMFJS_" + prefix + (this._uniqueId++);
		},
		_writeUint32Val: function(uint8arr, pos, val) {
			uint8arr[pos++] = val & 0xff;
			uint8arr[pos++] = (val >>> 8) & 0xff;
			uint8arr[pos++] = (val >>> 16) & 0xff;
			uint8arr[pos++] = (val >>> 24) & 0xff;
		},
		_blobToBinary: function(blob) {
			var ret = "";
			var len = blob.length;
			for (var i = 0; i < len; i++)
				ret += String.fromCharCode(blob[i]);
			return ret;
		},
	};
}

EMFJS.Blob = function(blob, offset) {
	if (blob instanceof EMFJS.Blob) {
		this.blob = blob.blob;
		this.data = blob.data;
		this.pos =  offset || blob.pos;
	} else {
		this.blob = blob;
		this.data = new Uint8Array(blob);
		this.pos =  offset || 0;
	}
};

EMFJS.Blob.prototype.eof = function() {
	return this.pos >= this.data.length;
};

EMFJS.Blob.prototype.seek = function(newpos) {
	if (newpos < 0 || newpos > this.data.length)
		throw new EMFJS.Error("Invalid seek position");
	this.pos = newpos;
};

EMFJS.Blob.prototype.skip = function(cnt) {
	var newPos = this.pos + cnt;
	if (newPos > this.data.length)
		throw new EMFJS.Error("Unexpected end of file");
	this.pos = newPos;
};

EMFJS.Blob.prototype.readBinary = function(cnt) {
	var end = this.pos + cnt;
	if (end > this.data.length)
		throw new EMFJS.Error("Unexpected end of file");
	var ret = "";
	while (cnt-- > 0)
		ret += String.fromCharCode(this.data[this.pos++]);
	return ret;
};

EMFJS.Blob.prototype.readInt8 = function() {
	if (this.pos + 1 > this.data.length)
		throw new EMFJS.Error("Unexpected end of file");
	return this.data[this.pos++];
};

EMFJS.Blob.prototype.readUint8 = function() {
	return this.readInt8() >>> 0;
};

EMFJS.Blob.prototype.readInt32 = function() {
	if (this.pos + 4 > this.data.length)
		throw new EMFJS.Error("Unexpected end of file");
	var val = this.data[this.pos++];
	val |= this.data[this.pos++] << 8;
	val |= this.data[this.pos++] << 16;
	val |= this.data[this.pos++] << 24;
	return val;
};

EMFJS.Blob.prototype.readUint32 = function() {
	return this.readInt32() >>> 0;
};

EMFJS.Blob.prototype.readUint16 = function() {
	if (this.pos + 2 > this.data.length)
		throw new EMFJS.Error("Unexpected end of file");
	var val = this.data[this.pos++];
	val |= this.data[this.pos++] << 8;
	return val;
};

EMFJS.Blob.prototype.readInt16 = function() {
	var val = this.readUint16();
	if (val > 32767)
		val -= 65536;
	return val;
};

EMFJS.Blob.prototype.readString = function(length) {
	if (this.pos + length > this.data.length)
		throw new EMFJS.Error("Unexpected end of file");
	var ret = "";
	for (var i = 0; i < length; i++)
		ret += String.fromCharCode(this.data[this.pos++] >>> 0);
	return ret;
};

EMFJS.Blob.prototype.readNullTermString = function(maxSize) {
	var ret = "";
	if (maxSize > 0) {
		maxSize--;
		for (var i = 0; i < maxSize; i++) {
			if (this.pos + i + 1 > this.data.length)
				throw new EMFJS.Error("Unexpected end of file");
			var byte = this.data[this.pos + i] >>> 0;
			if (byte == 0)
				break;
			ret += String.fromCharCode(byte);
		}
	}
	return ret;
};

EMFJS.ColorRef = function(reader, r, g, b) {
	if (reader != null) {
		this.r = reader.readUint8();
		this.g = reader.readUint8();
		this.b = reader.readUint8();
		reader.skip(1);
	} else {
		this.r = r;
		this.g = g;
		this.b = b;
	}
};

EMFJS.ColorRef.prototype.clone = function() {
	return new EMFJS.ColorRef(null, this.r, this.g, this.b);
};

EMFJS.ColorRef.prototype.toHex = function() {
	var rgb = (this.r << 16) | (this.g << 8) | this.b;
	return (0x1000000 + rgb).toString(16).slice(1);
};

EMFJS.ColorRef.prototype.toString = function() {
	return "{r: " + this.r + ", g: " + this.g + ", b: " + this.b + "}";
};

EMFJS.PointS = function(reader, x, y) {
	if (reader != null) {
		this.x = reader.readInt16();
		this.y = reader.readInt16();
	} else {
		this.x =  x;
		this.y = y;
	}
};

EMFJS.PointS.prototype.clone = function() {
	return new EMFJS.PointS(null, this.x, this.y);
};

EMFJS.PointS.prototype.toString = function() {
	return "{x: " + this.x + ", y: " + this.y + "}";
};

EMFJS.Rect = function(reader, left, top, right, bottom) {
	if (reader != null) {
		this.bottom = reader.readInt16();
		this.right = reader.readInt16();
		this.top = reader.readInt16();
		this.left = reader.readInt16();
	} else {
		this.bottom = bottom;
		this.right = right;
		this.top = top;
		this.left = left;
	}
};

EMFJS.Rect.prototype.clone = function() {
	return new EMFJS.Rect(null, this.left, this.top, this.right, this.bottom);
};

EMFJS.Rect.prototype.toString = function() {
	return "{left: " + this.left + ", top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + "}";
};

EMFJS.Rect.prototype.empty = function() {
	return this.left >= this.right || this.top >= this.bottom;
};

EMFJS.Rect.prototype.intersect = function(rect) {
	if (this.empty() || rect.empty())
		return null;
	if (this.left >= rect.right || this.top >= rect.bottom ||
		this.right <= rect.left || this.bottom <= rect.top) {
		return null;
	}
	return new EMFJS.Rect(null, Math.max(this.left, rect.left), Math.max(this.top, rect.top), Math.min(this.right, rect.right), Math.min(this.bottom, rect.bottom));
};

EMFJS.Obj = function(type) {
	this.type = type;
}

EMFJS.Obj.prototype.clone = function() {
	throw new EMFJS.Error("clone not implemented");
}

EMFJS.Obj.prototype.toString = function() {
	throw new EMFJS.Error("toString not implemented");
}

EMFJS.Font = function(reader, copy) {
	EMFJS.Obj.call(this, "font");
	if (reader != null) {
		this.height = reader.readInt16();
		this.width = reader.readInt16();
		this.escapement = reader.readInt16();
		this.orientation = reader.readInt16();
		this.weight = reader.readInt16();
		this.italic = reader.readUint8();
		this.underline = reader.readUint8();
		this.strikeout = reader.readUint8();
		this.charset = reader.readUint8();
		this.outprecision = reader.readUint8();
		this.clipprecision = reader.readUint8();
		this.quality = reader.readUint8();
		var pitchAndFamily = reader.readUint8();
		this.pitch = pitchAndFamily & 0xf; // TODO: double check
		this.family = (pitchAndFamily >> 6) & 0x3; // TODO: double check
		
		var dataLength = copy;
		var start = reader.pos;
		this.facename = reader.readNullTermString(Math.min(dataLength - (reader.pos - start), 32));
	} else if (copy != null) {
		this.height = copy.height;
		this.width = copy.width;
		this.escapement = copy.escapement;
		this.orientation = copy.orientation;
		this.weight = copy.weight;
		this.italic = copy.italic;
		this.underline = copy.underline;
		this.strikeout = copy.strikeout;
		this.charset = copy.charset;
		this.outprecision = copy.outprecision;
		this.clipprecision = copy.clipprecision;
		this.quality = copy.quality;
		this.pitch = copy.pitch;
		this.family = copy.family;
		this.facename = copy.facename;
	} else {
		// TODO: Values for a default font?
		this.height = -80;
		this.width = 0;
		this.escapement = 0;
		this.orientation = 0;
		this.weight = 400;
		this.italic = 0;
		this.underline = 0;
		this.strikeout = 0;
		this.charset = 0;
		this.outprecision = 0;
		this.clipprecision = 0;
		this.quality = 0;
		this.pitch = 0;
		this.family = 0;
		this.facename = "Helvetica";
	}
};
EMFJS.Font.prototype = Object.create(EMFJS.Obj.prototype);

EMFJS.Font.prototype.clone = function() {
	return new EMFJS.Font(null, this);
};

EMFJS.Font.prototype.toString = function() {
	//return "{facename: " + this.facename + ", height: " + this.height + ", width: " + this.width + "}";
	return JSON.stringify(this);
};

EMFJS.Brush = function(reader, copy, forceDibPattern) {
	EMFJS.Obj.call(this, "brush");
	if (reader != null) {
		var dataLength = copy;
		var start = reader.pos;
		
		if (forceDibPattern === true || forceDibPattern === false) {
			this.style = reader.readUint16();
			if (forceDibPattern && this.style != EMFJS.GDI.BrushStyle.BS_PATTERN)
				this.style = EMFJS.GDI.BrushStyle.BS_DIBPATTERNPT;
			switch (this.style) {
				case EMFJS.GDI.BrushStyle.BS_SOLID:
					this.color = new EMFJS.ColorRef(reader);
					break;
				case EMFJS.GDI.BrushStyle.BS_PATTERN:
					reader.skip(forceDibPattern ? 2 : 4);
					this.pattern = new EMFJS.Bitmap16(reader, dataLength - (reader.pos - start));
					break;
				case EMFJS.GDI.BrushStyle.BS_DIBPATTERNPT:
					this.colorusage = forceDibPattern ? reader.readUint16() : reader.readUint32();
					this.dibpatternpt = new EMFJS.DIBitmap(reader, dataLength - (reader.pos - start));
					break;
				case EMFJS.GDI.BrushStyle.BS_HATCHED:
					this.color = new EMFJS.ColorRef(reader);
					this.hatchstyle = reader.readUint16();
					break;
			}
		} else if (forceDibPattern instanceof EMFJS.PatternBitmap16) {
			this.style = MFJS.GDI.BrushStyle.BS_PATTERN;
			this.pattern = forceDibPattern;
		}
	} else {
		this.style = copy.style;
		switch (this.style) {
			case EMFJS.GDI.BrushStyle.BS_SOLID:
				this.color = copy.color.clone();
				break;
			case EMFJS.GDI.BrushStyle.BS_PATTERN:
				this.pattern = copy.pattern.clone();
				break;
			case EMFJS.GDI.BrushStyle.BS_DIBPATTERNPT:
				this.colorusage = copy.colorusage;
				this.dibpatternpt = copy.dibpatternpt;
				break;
			case EMFJS.GDI.BrushStyle.BS_HATCHED:
				this.color = copy.color.clone();
				this.hatchstyle = copy.hatchstyle;
				break;
		}
	}
};
EMFJS.Brush.prototype = Object.create(EMFJS.Obj.prototype);

EMFJS.Brush.prototype.clone = function() {
	return new EMFJS.Brush(null, this);
};

EMFJS.Brush.prototype.toString = function() {
	var ret = "{style: " + this.style;
	switch (this.style) {
		case EMFJS.GDI.BrushStyle.BS_SOLID:
			ret += ", color: " + this.color.toString();
			break
		case EMFJS.GDI.BrushStyle.BS_DIBPATTERNPT:
			ret += ", colorusage: " + this.colorusage;
			break;
		case EMFJS.GDI.BrushStyle.BS_HATCHED:
			ret += ", color: " + this.color.toString() + ", hatchstyle: " + this.hatchstyle;
			break;
	}
	return ret + "}";
};

EMFJS.Pen = function(reader, style, width, color, linecap, join) {
	EMFJS.Obj.call(this, "pen");
	if (reader != null) {
		var style = reader.readUint16();
		this.style = style & 0xFF;
		this.width = new EMFJS.PointS(reader);
		this.color = new EMFJS.ColorRef(reader);
		this.linecap = (style & (EMFJS.GDI.PenStyle.PS_ENDCAP_SQUARE | EMFJS.GDI.PenStyle.PS_ENDCAP_FLAT));
		this.join = (style & (EMFJS.GDI.PenStyle.PS_JOIN_BEVEL | EMFJS.GDI.PenStyle.PS_JOIN_MITER));
	} else {
		this.style = style;
		this.width = width;
		this.color = color;
		this.linecap = linecap;
		this.join = join;
	}
};
EMFJS.Pen.prototype = Object.create(EMFJS.Obj.prototype);

EMFJS.Pen.prototype.clone = function() {
	return new EMFJS.Pen(null, this.style, this.width.clone(), this.color.clone(), this.linecap, this.join);
};

EMFJS.Pen.prototype.toString = function() {
	return "{style: " + this.style + ", width: " + this.width.toString() + ", color: " + this.color.toString() + ", linecap: " + this.linecap + ", join: " + this.join + "}";
};

EMFJS.PaletteEntry = function(reader, copy) {
	if (reader != null) {
		this.flag = reader.readUint8();
		this.b = reader.readUint8();
		this.g = reader.readUint8();
		this.r = reader.readUint8();
	} else {
		this.flag = copy.flag;
		this.b = copy.b;
		this.g = copy.g;
		this.r = copy.r;
	}
};

EMFJS.PaletteEntry.prototype.clone = function() {
	return new EMFJS.PaletteEntry(null, this);
};

EMFJS.Palette = function(reader, copy) {
	EMFJS.Obj.call(this, "palette");
	if (reader != null) {
		this.start = reader.readUint16();
		var cnt = reader.readUint16();
		this.entries = [];
		while (cnt > 0)
			this.entries.push(new EMFJS.PaletteEntry(reader));
	} else {
		this.start = copy.start;
		this.entries = [];
		var len = copy.entries.length;
		for (var i = 0; i < len; i++)
			entries.push(copy.entries[i.clone()]);
	}
};
EMFJS.Palette.prototype = Object.create(EMFJS.Obj.prototype);

EMFJS.Palette.prototype.clone = function() {
	return new EMFJS.Palette(null, this);
};

EMFJS.Palette.prototype.toString = function() {
	return "{ #entries: " + this.entries.length + "}"; // TODO
};

EMFJS.Scan = function(reader, copy, top, bottom, scanlines) {
	if (reader != null) {
		var cnt = reader.readUint16();
		this.top = reader.readUint16();
		this.bottom = reader.readUint16();
		this.scanlines = [];
		for (var i = 0; i < cnt; i++) {
			var left = reader.readUint16();
			var right = reader.readUint16();
			this.scanlines.push({left: left, right: right});
		}
		reader.skip(2);
	} else if (copy != null) {
		this.top = copy.top;
		this.bottom = copy.bottom;
		this.scanlines = [];
		for (var i = 0; i < copy.scanlines.length; i++) {
			var scanline = copy.scanlines[i];
			this.scanlines.push({left: scanline.left, right: scanline.right});
		}
	} else {
		this.top = top;
		this.bottom = bottom;
		this.scanlines = scanlines;
	}
};

EMFJS.Scan.prototype.clone = function() {
	return new EMFJS.Scan(null, this);
};

EMFJS.Scan.prototype.subtract = function(left, right) {
	var i;
	
	// Keep everything on the left side
	i = 0;
	while (i < this.scanlines.length) {
		var scanline = this.scanlines[i];
		if (scanline.left <= left) {
			if (scanline.right >= left) {
				scanline.right = left - 1;
				if (scanline.left >= scanline.right) {
					this.scanlines.splice(i, 1);
					continue;
				}
			}
			i++;
		} else {
			break;
		}
	}
	
	// Find the first one that may exceed to the right side
	var first = i;
	var cnt = 0;
	while (i < this.scanlines.length) {
		var scanline = this.scanlines[i];
		if (scanline.right > right) {
			scanline.left = right;
			cnt = i - first;
			if (scanline.left >= scanline.right)
				cnt++;
			break;
		}
		i++;
	}
	
	// Delete everything we're subtracting
	if (cnt > 0 && first < this.scanlines.length)
		this.scanlines.splice(first, cnt);
	
	return this.scanlines.length > 0;
};

EMFJS.Scan.prototype.intersect = function(left, right) {
	// Get rid of anything that falls entirely outside to the left
	for (var i = 0; i < this.scanlines.length; i++) {
		var scanline = this.scanlines[i];
		if (scanline.left >= left || scanline.right >= left) {
			if (i > 0)
				this.scanlines.splice(0, i);
			break;
		}
	}
	
	if (this.scanlines.length > 0) {
		// Adjust the first to match the left, if needed
		var scanline = this.scanlines[0];
		if (scanline.left < left)
			scanline.left = left;
		
		// Get rid of anything that falls entirely outside to the right
		for (var i = 0; i < this.scanlines.length; i++) {
			scanline = this.scanlines[i];
			if (scanline.left > right) {
				this.scanlines.splice(i, this.scanline.length - i);
				break;
			}
		}
		
		if (this.scanlines.length > 0) {
			// Adjust the last to match the right, if needed
			scanline = this.scanlines[this.scanlines.length - 1];
			if (scanline.right > right)
				scanline.right = right;
		}
	}
	return this.scanlines.length > 0;
};

EMFJS.Scan.prototype.toString = function() {
	return "{ #scanlines: " + this.scanlines.length + " bounds: " + this.bounds.toString() + "}";
};

EMFJS.Region = function(reader, copy) {
	EMFJS.Obj.call(this, "region");
	if (reader != null) {
		reader.skip(8);
		var rgnSize = reader.readInt16();
		var scanCnt = reader.readInt16();
		reader.skip(2);
		// note, Rect in reverse, can't use EMFJS.Rect(reader) directly
		var left = reader.readInt16();
		var top = reader.readInt16();
		var right = reader.readInt16();
		var bottom = reader.readInt16();
		this.bounds = new EMFJS.Rect(null, left, top, right, bottom);
		this.scans = [];
		for (var i = 0; i < scanCnt; i++)
			this.scans.push(new EMFJS.Scan(reader));
		this._updateComplexity();
	} else if (copy != null) {
		this.bounds = copy.bounds != null ? copy.bounds.clone() : null;
		if (copy.scans != null) {
			this.scans = [];
			for (var i = 0; i < copy.scans.length; i++)
				this.scans.push(copy.scans[i].clone());
		} else {
			this.scans = null;
		}
		this.complexity = copy.complexity;
	} else {
		this.bounds = null;
		this.scans = null;
		this.complexity = 0;
	}
};
EMFJS.Region.prototype = Object.create(EMFJS.Obj.prototype);

EMFJS.Region.prototype.clone = function() {
	return new EMFJS.Region(null, this);
};

EMFJS.Region.prototype.toString = function() {
	var _complexity = ["null", "simple", "complex"];
	return "{complexity: " + _complexity[this.complexity] + " bounds: " + (this.bounds != null ? this.bounds.toString() : "[none]") + " #scans: " + (this.scans != null ? this.scans.length : "[none]") + "}";
};

EMFJS.Region.prototype._updateComplexity = function() {
	if (this.bounds == null) {
		this.complexity = 0;
		this.scans = null;
	} else if (this.bounds.empty()) {
		this.complexity = 0;
		this.scans = null;
		this.bounds = null;
	} else if (this.scans == null) {
		this.complexity = 1;
	} else {
		this.complexity = 2;
		if (this.scans.length == 1) {
			var scan = this.scans[0];
			if (scan.top == this.bounds.top && scan.bottom == this.bounds.bottom && scan.scanlines.length == 1) {
				var scanline = scan.scanlines[0];
				if (scanline.left == this.bounds.left && scanline.right == this.bounds.right) {
					this.scans = null;
					this.complexity = 1;
				}
			}
		}
	}
};

EMFJS.Region.prototype.subtract = function(rect) {
	EMFJS.log("[emf] Region " + this.toString() + " subtract " + rect.toString());
	
	if (this.bounds != null) {
		var isect = this.bounds.intersect(rect);
		if (isect != null) { // Only need to do anything if there is any chance of an overlap
			if (this.scans == null) {
				// We currently have a simple region and there is some kind of an overlap.
				// We need to create scanlines now.  Simplest method is to fake one scan line
				// that equals the simple region and re-use the same logic as for complex regions
				this.scans = new EMFJS.Scan(null, null, this.bounds.top, this.bounds.bottom,
					[{left: this.bounds.left, right: this.bounds.right}]);
				this.complexity = 2;
			}
			
			// We (now) have a complex region.  First we skip any scans that are entirely above rect.top
			// The first scan that falls partially below rect.top needs to be split into two scans.
			var si = 0;
			while (si < this.scans.length) {
				var scan = this.scans[si];
				if (scan.bottom >= rect.top) {
					// We need to clone this scan into two so that we can subtract from the second one
					var cloned = scan.clone();
					scan.bottom = rect.top - 1;
					cloned.top = rect.top;
					if (scan.top >= scan.bottom) {
						this.scans[si] = cloned;
					} else {
						EMFJS.log("[emf] Region split top scan " + si + " for substraction");
						this.scans.splice(++si, 0, cloned);
					}
					break;
				}
				si++;
			}
			
			// Now find the first one that falls at least partially below rect.bottom, which needs to be
			// split if it is only partially below rect.bottom
			var first = si;
			while (si < this.scans.length) {
				var scan = this.scans[si];
				if (scan.top > rect.bottom)
					break;
				if (scan.bottom > rect.bottom) {
					// We need to clone this scan into two so that we can subtract from the first one
					var cloned = scan.clone();
					scan.bottom = rect.bottom;
					cloned.top = rect.bottom + 1;
					if (scan.top >= scan.bottom) {
						this.scans[si] = cloned;
					} else {
						EMFJS.log("[emf] Region split bottom scan " + si + " for substraction");
						this.scans.splice(++si, 0, clone);
					}
					break;
				}
				si++;
			}
			
			// Now perform a subtraction on each scan in between rect.top and rect.bottom.  Because we
			// cloned scans that partially overlapped rect.top and rect.bottom, we don't have to
			// account for this anymore.
			if (first < this.scans.length) {
				var last = si;
				si = first;
				while (si < last) {
					var scan = this.scans[si];
					if (!scan.subtract(rect.left, rect.right)) {
						EMFJS.log("[emf] Region remove now empty scan " + si + " due to subtraction");
						this.scans.splice(si, 1);
						last--;
						continue;
					}
					
					si++;
				}
			}
			
			// Update bounds
			if (this.scans != null) {
				var left, top, right, bottom;
				var len = this.scans.length;
				for (var i = 0; i < len; i++) {
					var scan = this.scans[i];
					if (i == 0)
						top = scan.top;
					if (i == len - 1)
						bottom = scan.bottom;
					
					var slen = scan.scanline.length;
					if (slen > 0) {
						var scanline = scan.scanline[0];
						if (left == null || scanline.left < left)
							left = scanline.left;
						scanline = scan.scanline[slen - 1];
						if (right == null || scanline.right > right)
							right = scanline.right;
					}
				}
				
				if (left != null && top != null && right != null && bottom != null) {
					this.bounds = new EMFJS.Rect(null, left, top, right, bottom);
					this._updateComplexity();
				} else {
					// This has to be a null region now
					this.bounds = null;
					this.scans = null;
					this.complexity = 0;
				}
			} else {
				this._updateComplexity();
			}
		}
	}
	
	EMFJS.log("[emf] Region subtraction -> " + this.toString());
};

EMFJS.Region.prototype.intersect = function(rect) {
	EMFJS.log("[emf] Region " + this.toString() + " intersect with " + rect.toString());
	if (this.bounds != null) {
		this.bounds = this.bounds.intersect(rect);
		if (this.bounds != null) {
			if (this.scans != null) {
				var si = 0;
				// Remove any scans that are entirely above the new bounds.top
				while (si < this.scans.length) {
					var scan = this.scans[si];
					if (scan.bottom < this.bounds.top)
						si++;
					else
						break;
				}
				if (si > 0) {
					EMFJS.log("[emf] Region remove " + si + " scans from top");
					this.scans.splice(0, si);
					
					// Adjust the first scan's top to match the new bounds.top
					if (this.scans.length > 0)
						this.scans[0].top = this.bounds.top;
				}
				
				// Get rid of anything that falls outside the new bounds.left/bounds.right
				si = 0;
				while (si < this.scans.length) {
					var scan = this.scans[si];
					if (scan.top > this.bounds.bottom) {
						// Remove this and all remaining scans that fall entirely below the new bounds.bottom
						EMFJS.log("[emf] Region remove " + (this.scans.length - si) + " scans from bottom");
						this.scans.splice(si, this.scans.length - si);
						break;
					}
					if (!scan.intersect(this.bounds.left, this.bounds.right)) {
						// Remove now empty scan
						EMFJS.log("[emf] Region remove now empty scan " + si + " due to intersection");
						this.scans.splice(si, 1);
						continue;
					}
					si++;
				}
				
				// If there are any scans left, adjust the last one's bottom to the new bounds.bottom
				if (this.scans.length > 0)
					this.scans[this.scans.length - 1].bottom = this.bounds.bottom;
				
				this._updateComplexity();
			}
		} else {
			this.scans = null;
			this.complexity = 0;
		}
	}
	EMFJS.log("[emf] Region intersection -> " + this.toString());
};

EMFJS.Region.prototype.offset = function(offX, offY) {
	if (this.bounds != null) {
		this.bounds.left += offX;
		this.bounds.top += offY;
		this.bounds.right += offX;
		this.bounds.bottom += offY;
	}
	
	if (this.scans != null) {
		var slen = this.scans.length;
		for (var si = 0; si < slen; si++) {
			var scan = this.scans[si];
			scan.top += offY;
			scan.bottom += offY;
			
			var len = scan.scanlines.length;
			for (var i = 0; i < len; i++) {
				var scanline = scan.scanlines[i];
				scanline.left += offX;
				scanline.right += offX;
			}
		}
	}
};

EMFJS.CreateSimpleRegion = function(left, top, right, bottom) {
	var rgn = new EMFJS.Region(null, null);
	rgn.bounds = new EMFJS.Rect(null, left, top, right, bottom);
	rgn._updateComplexity();
	return rgn;
};

EMFJS.BitmapBase = function() {
};

EMFJS.BitmapBase.prototype.getWidth = function() {
	throw EMFJS.Error("getWidth not implemented");
}

EMFJS.BitmapBase.prototype.getHeight = function() {
	throw EMFJS.Error("getHeight not implemented");
}

EMFJS.BitmapCoreHeader = function(reader, skipsize) {
	if (skipsize)
		reader.skip(4);
	this.width = reader.readUint16();
	this.height = reader.readUint16();
	this.planes = reader.readUint16();
	this.bitcount = reader.readUint16();
}

EMFJS.BitmapCoreHeader.prototype.colors = function() {
	return this.bitcount <= 8 ? 1 << this.bitcount : 0;
};

EMFJS.BitmapInfoHeader = function(reader, skipsize) {
	if (skipsize)
		reader.skip(4);
	this.width = reader.readInt32();
	this.height = reader.readInt32();
	this.planes = reader.readUint16();
	this.bitcount = reader.readUint16();
	this.compression = reader.readUint32();
	this.sizeimage = reader.readUint32();
	this.xpelspermeter = reader.readInt32();
	this.ypelspermeter = reader.readInt32();
	this.clrused = reader.readUint32();
	this.clrimportant = reader.readUint32();
};

EMFJS.BitmapInfoHeader.prototype.colors = function() {
	if (this.clrused != 0)
		return this.clrused < 256 ? this.clrused : 256;
	else
		return this.bitcount > 8 ? 0 : 1 << this.bitcount;
};

EMFJS.BitmapInfo = function(reader, usergb) {
	EMFJS.BitmapBase.call(this);
	this._reader = reader;
	this._offset = reader.pos;
	this._usergb = usergb;
	var hdrsize = reader.readUint32();
	this._infosize = hdrsize;
	if (hdrsize == EMFJS.GDI.BITMAPCOREHEADER_SIZE) {
		this._header = new EMFJS.BitmapCoreHeader(reader, false);
		this._infosize += this._header.colors() * (usergb ? 3 : 2);
	}
	else {
		this._header = new EMFJS.BitmapInfoHeader(reader, false);
		var masks = this._header.compression == EMFJS.GDI.BitmapCompression.BI_BITFIELDS ? 3 : 0;
		if (hdrsize <= EMFJS.GDI.BITMAPINFOHEADER_SIZE + (masks * 4))
			this._infosize = EMFJS.GDI.BITMAPINFOHEADER_SIZE + (masks * 4);
		this._infosize += this._header.colors() * (usergb ? 4 : 2);
	}
};
EMFJS.BitmapInfo.prototype = Object.create(EMFJS.BitmapBase.prototype);

EMFJS.BitmapInfo.prototype.getWidth = function() {
	return this._header.width;
};

EMFJS.BitmapInfo.prototype.getHeight = function() {
	return Math.abs(this._header.height);
};

EMFJS.BitmapInfo.prototype.infosize = function() {
	return this._infosize;
};

EMFJS.BitmapInfo.prototype.header = function() {
	return this._header;
};

EMFJS.DIBitmap = function(reader, size) {
	EMFJS.BitmapBase.call(this);
	this._reader = reader;
	this._offset = reader.pos;
	this._size = size;
	this._info = new EMFJS.BitmapInfo(reader, true);
};
EMFJS.DIBitmap.prototype = Object.create(EMFJS.BitmapBase.prototype);

EMFJS.DIBitmap.prototype.getWidth = function() {
	return this._info.getWidth();
};

EMFJS.DIBitmap.prototype.getHeight = function() {
	return this._info.getHeight();
};

EMFJS.DIBitmap.prototype.makeBitmapFileHeader = function() {
	var buf = new ArrayBuffer(14);
	var view = new Uint8Array(buf);
	view[0] = 0x42;
	view[1] = 0x4d;
	EMFJS._writeUint32Val(view, 2, this._size + 14);
	EMFJS._writeUint32Val(view, 10, this._info.infosize() + 14);
	return EMFJS._blobToBinary(view);
};

EMFJS.DIBitmap.prototype.base64ref = function() {
	var prevpos = this._reader.pos;
	this._reader.seek(this._offset);
	var mime = "image/bmp";
	var header = this._info.header();
	var data;
	if (header.compression != null) {
		switch (header.compression) {
			case EMFJS.GDI.BitmapCompression.BI_JPEG:
				mime = "data:image/jpeg";
				break;
			case EMFJS.GDI.BitmapCompression.BI_PNG:
				mime = "data:image/png";
				break;
			default:
				data = this.makeBitmapFileHeader();
				break;
		}
	} else {
		data = this.makeBitmapFileHeader();
	}
	
	if (data != null)
		data += this._reader.readBinary(this._size);
	else
		data = this._reader.readBinary(this._size);
	
	var ref = "data:" + mime + ";base64," + btoa(data);
	this._reader.seek(prevpos);
	return ref;
};

EMFJS.Bitmap16 = function(reader, size) {
	if (reader != null) {
		this._reader = reader;
		this._offset = reader.pos;
		this._size = size;
		this.type = reader.readInt16();
		this.width = reader.readInt16();
		this.height = reader.readInt16();
		this.widthBytes = reader.readInt16();
		this.planes = reader.readUint8();
		this.bitsPixel = reader.readUint8();
		this.bitsOffset = reader.pos;
		this.bitsSize = (((this.width * this.bitsPixel + 15) >> 4) << 1) * this.height;
		if (this.bitsSize != size - 10)
			throw new EMFJS.Error("Bitmap should have " + this.bitsSize + " bytes, but has " + (size - 10));
	} else {
		var copy = size;
		this._reader = copy._reader;
		this._offset = copy._offset;
		this._size = copy._size;
		this.type = copy.type;
		this.width = copy.width;
		this.height = copy.height;
		this.widthBytes = copy.widthBytes;
		this.planes = copy.planes;
		this.bitsPixel = copy.bitsPixel;
		this.bitsOffset = copy.bitsOffset;
		this.bitsSize = copy.bitsSize;
	}
};
EMFJS.Bitmap16.prototype = Object.create(EMFJS.BitmapBase.prototype);

EMFJS.Bitmap16.prototype.getWidth = function() {
	return this.width;
};

EMFJS.Bitmap16.prototype.getHeight = function() {
	return this.height;
};

EMFJS.Bitmap16.prototype.clone = function() {
	return new EMFJS.Bitmap16(null, this);
};

EMFJS.PatternBitmap16 = function(reader, size) {
	EMFJS.Bitmap16.call(this, reader, size);
	if (reader != null) {
		this.bitsOffset += 22; // skip bits (4 bytes) + reserved (18 bytes)
	}
};
EMFJS.PatternBitmap16.prototype = Object.create(EMFJS.Bitmap16.prototype);

EMFJS.PatternBitmap16.prototype.clone = function() {
	return new EMFJS.PatternBitmap16(null, this);
};

EMFJS.PolyPolygon = function(reader) {
	var polygonsCnt = reader.readUint16();
	var polygonsPtCnts = [];
	for (var i = 0; i < polygonsCnt; i++)
		polygonsPtCnts.push(reader.readUint16());
	
	this._polygons = [];
	for (var i = 0; i < polygonsCnt; i++) {
		var ptCnt = polygonsPtCnts[i];
		
		var polygon = [];
		for (var ip = 0; ip < ptCnt; ip++)
			polygon.push(new EMFJS.PointS(reader));
		this._polygons.push(polygon);
	}
};

EMFJS.GDIContextState = function(copy, defObjects) {
	if (copy != null) {
		this._svggroup = copy._svggroup;
		this._svgclipChanged = copy._svgclipChanged;
		this._svgtextbkfilter = copy._svgtextbkfilter;
		this.mapmode = copy.mapmode;
		this.stretchmode = copy.stretchmode;
		this.textalign = copy.textalign;
		this.bkmode = copy.bkmode;
		this.textcolor = copy.textcolor.clone();
		this.bkcolor = copy.bkcolor.clone();
		this.polyfillmode = copy.polyfillmode;
		this.wx = copy.wx;
		this.wy = copy.wy;
		this.ww = copy.ww;
		this.wh = copy.wh;
		this.vx = copy.vx;
		this.vy = copy.vy;
		this.vw = copy.vw;
		this.vh = copy.vh;
		this.x = copy.x;
		this.y = copy.y;
		
		this.clip = copy.clip;
		this.ownclip = false;
		
		this.selected = {};
		for (var type in copy.selected)
			this.selected[type] = copy.selected[type];
	} else {
		this._svggroup = null;
		this._svgclipChanged = false;
		this._svgtextbkfilter = null;
		this.Id = null;
		this.mapmode = EMFJS.GDI.MapMode.MM_ANISOTROPIC;
		this.stretchmode = EMFJS.GDI.StretchMode.COLORONCOLOR;
		this.textalign = 0; // TA_LEFT | TA_TOP | TA_NOUPDATECP
		this.bkmode = EMFJS.GDI.MixMode.OPAQUE;
		this.textcolor = new EMFJS.ColorRef(null, 0, 0, 0);
		this.bkcolor = new EMFJS.ColorRef(null, 255, 255, 255);
		this.polyfillmode = EMFJS.GDI.PolyFillMode.ALTERNATE;
		this.wx = 0;
		this.wy = 0;
		this.ww = 0;
		this.wh = 0;
		this.vx = 0;
		this.vy = 0;
		this.vw = 0;
		this.vh = 0;
		this.x = 0;
		this.y = 0;
		
		this.clip = null;
		this.ownclip = false;
		
		this.selected = {};
		for (var type in defObjects) {
			var defObj = defObjects[type];
			this.selected[type] = defObj != null ? defObj.clone() : null;
		}
	}
}

EMFJS.GDIContext = function(svg) {
	this._svg = svg;
	this._svgdefs = null;
	this._svgPatterns = {};
	this._svgClipPaths = {};
	
	this.defObjects = {
		brush: new EMFJS.Brush(null, EMFJS.GDI.BrushStyle.BS_SOLID, new EMFJS.ColorRef(null, 0, 0, 0), false),
		pen: new EMFJS.Pen(null, EMFJS.GDI.PenStyle.PS_SOLID, new EMFJS.PointS(null, 1, 1), new EMFJS.ColorRef(null, 0, 0, 0), 0, 0),
		font: new EMFJS.Font(null, null),
		palette: null,
		region: null
	};
	
	this.state = new EMFJS.GDIContextState(null, this.defObjects);
	this.statestack = [this.state];
	this.objects = {};
};

// EMFJS.GDIContext.prototype._pushGroup = function() {
// 	if (this.state._svggroup == null || this.state._svgclipChanged) {
// 		this.state._svgclipChanged = false;
// 		this.state._svgtextbkfilter = null;
//
// 		var settings = {
// 			viewBox: [this.state.vx, this.state.vy, this.state.vw, this.state.vh].join(" "),
// 			preserveAspectRatio: "none"
// 		};
// 		if (this.state.clip != null) {
// 			EMFJS.log("[gdi] new svg x=" + this.state.vx + " y=" + this.state.vy + " width=" + this.state.vw + " height=" + this.state.vh + " with clipping");
// 			settings["clip-path"] = "url(#" + this._getSvgClipPathForRegion(this.state.clip) + ")";
// 		}
// 		else
// 			EMFJS.log("[gdi] new svg x=" + this.state.vx + " y=" + this.state.vy + " width=" + this.state.vw + " height=" + this.state.vh + " without clipping");
// 		this.state._svggroup = this._svg.svg(this.state._svggroup,
// 			this.state.vx, this.state.vy, this.state.vw, this.state.vh, settings);
// 	}
// };
//
// EMFJS.GDIContext.prototype._storeObject = function(obj) {
// 	var i = 0;
// 	while (this.objects[i.toString()] != null && i <= 65535)
// 		i++;
// 	if (i > 65535) {
// 		EMFJS.log("[gdi] Too many objects!");
// 		return -1;
// 	}
//
// 	this.objects[i.toString()] = obj;
// 	return i;
// };
//
// EMFJS.GDIContext.prototype._getObject = function(objIdx) {
// 	var obj = this.objects[objIdx.toString()];
// 	if (obj == null)
// 		EMFJS.log("[gdi] No object with handle " + objIdx);
// 	return obj;
// };
//
// EMFJS.GDIContext.prototype._getSvgDef = function() {
// 	if (this._svgdefs == null)
// 		this._svgdefs = this._svg.defs();
// 	return this._svgdefs;
// };
//
//
// EMFJS.GDIContext.prototype._getSvgClipPathForRegion = function(region) {
// 	for (var id in this._svgClipPaths) {
// 		var rgn = this._svgClipPaths[id];
// 		if (rgn == region)
// 			return id;
// 	}
//
// 	var id = EMFJS._makeUniqueId("c");
// 	var sclip = this._svg.clipPath(this._getSvgDef(), id, "userSpaceOnUse");
// 	switch (region.complexity) {
// 		case 1:
// 			this._svg.rect(sclip, this._todevX(region.bounds.left), this._todevY(region.bounds.top),
// 				this._todevW(region.bounds.right - region.bounds.left), this._todevH(region.bounds.bottom - region.bounds.top),
// 				{ fill: 'black', strokeWidth: 0 });
// 			break;
// 		case 2:
// 			for (var i = 0; i < region.scans.length; i++) {
// 				var scan = region.scans[i];
// 				for (var j = 0; j < scan.scanlines.length; j++) {
// 					var scanline = scan.scanlines[j];
// 					this._svg.rect(sclip, this._todevX(scanline.left), this._todevY(scan.top),
// 						this._todevW(scanline.right - scanline.left), this._todevH(scan.bottom - scan.top),
// 						{ fill: 'black', strokeWidth: 0 });
// 				}
// 			}
// 			break;
// 	};
// 	this._svgClipPaths[id] = region;
// 	return id;
// };
//
// EMFJS.GDIContext.prototype._getSvgPatternForBrush = function(brush) {
// 	for (var id in this._svgPatterns) {
// 		var pat = this._svgPatterns[id];
// 		if (pat == brush)
// 			return id;
// 	}
//
// 	var width, height, img;
// 	switch (brush.style) {
// 		case EMFJS.GDI.BrushStyle.BS_PATTERN:
// 			width = brush.pattern.getWidth();
// 			height = brush.pattern.getheight();
// 			break;
// 		case EMFJS.GDI.BrushStyle.BS_DIBPATTERNPT:
// 			width = brush.dibpatternpt.getWidth();
// 			height = brush.dibpatternpt.getHeight();
// 			img = brush.dibpatternpt.base64ref();
// 			break;
// 		default:
// 			throw new EMFJS.Error("Invalid brush style");
// 	}
//
// 	var id = EMFJS._makeUniqueId("p");
// 	var spat = this._svg.pattern(this._getSvgDef(), id, 0, 0, width, height, {patternUnits: 'userSpaceOnUse'});
// 	this._svg.image(spat, 0, 0, width, height, img);
// 	this._svgPatterns[id] = brush;
// 	return id;
// };
//
// EMFJS.GDIContext.prototype._selectObject = function(obj) {
// 	this.state.selected[obj.type] = obj;
// 	if (obj.type == "region")
// 		this.state._svgclipChanged = true;
// };
//
// EMFJS.GDIContext.prototype._deleteObject = function(objIdx) {
// 	var obj = this.objects[objIdx.toString()];
// 	if (obj != null) {
// 		for (var i = 0; i < this.statestack.length; i++) {
// 			var state = this.statestack[i];
// 			if (state.selected[obj.type] == obj)
// 				state.selected[obj.type] = this.defObjects[obj.type].clone();
// 		}
// 		delete this.objects[objIdx.toString()];
// 		return true;
// 	}
//
// 	EMFJS.log("[gdi] Cannot delete object with invalid handle " + objIdx);
// 	return false;
// };
//
// EMFJS.GDIContext.prototype._getClipRgn = function() {
// 	if (this.state.clip != null) {
// 		if (!this.state.ownclip)
// 			this.state.clip = this.state.clip.clone();
// 	} else {
// 		if (this.state.selected.region != null)
// 			this.state.clip = this.state.selected.region.clone();
// 		else
// 			this.state.clip = EMFJS.CreateSimpleRegion(this.state.wx, this.state.wy, this.state.wx + this.state.ww, this.state.wy + this.state.wh);
// 	}
// 	this.state.ownclip = true;
// 	return this.state.clip;
// };
//
// EMFJS.GDIContext.prototype._todevX = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor((val - this.state.wx) * (this.state.vw / this.state.ww)) + this.state.vx;
// };
//
// EMFJS.GDIContext.prototype._todevY = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor((val - this.state.wy) * (this.state.vh / this.state.wh)) + this.state.vy;
// };
//
// EMFJS.GDIContext.prototype._todevW = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor(val * (this.state.vw / this.state.ww)) + this.state.vx;
// };
//
// EMFJS.GDIContext.prototype._todevH = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor(val * (this.state.vh / this.state.wh)) + this.state.vy;
// };
//
// EMFJS.GDIContext.prototype._tologicalX = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor((val - this.state.vx) / (this.state.vw / this.state.ww)) + this.state.wx;
// };
//
// EMFJS.GDIContext.prototype._tologicalY = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor((val - this.state.vy) / (this.state.vh / this.state.wh)) + this.state.wy;
// };
//
// EMFJS.GDIContext.prototype._tologicalW = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor(val / (this.state.vw / this.state.ww)) + this.state.wx;
// };
//
// EMFJS.GDIContext.prototype._tologicalH = function(val) {
// 	// http://wvware.sourceforge.net/caolan/mapmode.html
// 	// logical -> device
// 	return Math.floor(val / (this.state.vh / this.state.wh)) + this.state.wy;
// };
//
// EMFJS.GDIContext.prototype.setMapMode = function(mode) {
// 	EMFJS.log("[gdi] setMapMode: mode=" + mode);
// 	this.state.mapmode = mode;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.setWindowOrg = function(x, y) {
// 	EMFJS.log("[gdi] setWindowOrg: x=" + x + " y=" + y);
// 	this.state.wx = x;
// 	this.state.wy = y;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.setWindowExt = function(x, y) {
// 	EMFJS.log("[gdi] setWindowExt: x=" + x + " y=" + y);
// 	this.state.ww = x;
// 	this.state.wh = y;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.offsetWindowOrg = function(offX, offY) {
// 	EMFJS.log("[gdi] offsetWindowOrg: offX=" + offX + " offY=" + offY);
// 	this.state.wx += offX;
// 	this.state.wy += offY;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.setViewportOrg = function(x, y) {
// 	EMFJS.log("[gdi] setViewportOrg: x=" + x + " y=" + y);
// 	this.state.vx = x;
// 	this.state.vy = y;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.setViewportExt = function(x, y) {
// 	EMFJS.log("[gdi] setViewportExt: x=" + x + " y=" + y);
// 	this.state.vw = x;
// 	this.state.vh = y;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.offsetViewportOrg = function(offX, offY) {
// 	EMFJS.log("[gdi] offsetViewportOrg: offX=" + offX + " offY=" + offY);
// 	this.state.vx += offX;
// 	this.state.vy += offY;
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.saveDC = function() {
// 	EMFJS.log("[gdi] saveDC");
// 	var prevstate = this.state;
// 	this.state = new EMFJS.GDIContextState(this.state);
// 	this.statestack.push(prevstate);
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.restoreDC = function(saved) {
// 	EMFJS.log("[gdi] restoreDC: saved=" + saved);
// 	if (this.statestack.length > 1) {
// 		if (saved == -1) {
// 			this.state = this.statestack.pop();
// 		} else if (saved < -1) {
// 			throw new EMFJS.Error("restoreDC: relative restore not implemented");
// 		} else if (saved > 1) {
// 			throw new EMFJS.Error("restoreDC: absolute restore not implemented");
// 		}
// 	} else {
// 		throw new EMFJS.Error("No saved contexts");
// 	}
//
// 	this.state._svggroup = null;
// };
//
// EMFJS.GDIContext.prototype.escape = function(func, blob, offset, count) {
// 	EMFJS.log("[gdi] escape: func=" + func + " offset=" + offset + " count=" + count);
// };
//
// EMFJS.GDIContext.prototype.setStretchBltMode = function(stretchMode) {
// 	EMFJS.log("[gdi] setStretchBltMode: stretchMode=" + stretchMode);
// };
//
// EMFJS.GDIContext.prototype.stretchDib = function(srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH, rasterOp, colorUsage, dib) {
// 	EMFJS.log("[gdi] stretchDibBits: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16));
// 	srcX = this._todevX(srcX);
// 	srcY = this._todevY(srcY);
// 	srcW = this._todevW(srcW);
// 	srcH = this._todevH(srcH);
// 	dstX = this._todevX(dstX);
// 	dstY = this._todevY(dstY);
// 	dstW = this._todevW(dstW);
// 	dstH = this._todevH(dstH);
// 	EMFJS.log("[gdi] stretchDib: TRANSLATED: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16) + " colorUsage=0x" + colorUsage.toString(16));
// 	this._pushGroup();
// 	this._svg.image(this.state._svggroup, dstX, dstY, dstW, dstH, dib.base64ref());
// };
//
// EMFJS.GDIContext.prototype.stretchDibBits = function(srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH, rasterOp, dib) {
// 	EMFJS.log("[gdi] stretchDibBits: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16));
// 	srcX = this._todevX(srcX);
// 	srcY = this._todevY(srcY);
// 	srcW = this._todevW(srcW);
// 	srcH = this._todevH(srcH);
// 	dstX = this._todevX(dstX);
// 	dstY = this._todevY(dstY);
// 	dstW = this._todevW(dstW);
// 	dstH = this._todevH(dstH);
// 	EMFJS.log("[gdi] stretchDibBits: TRANSLATED: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16));
// 	this._pushGroup();
// 	this._svg.image(this.state._svggroup, dstX, dstY, dstW, dstH, dib.base64ref());
// };
//
// EMFJS.GDIContext.prototype._applyOpts = function(opts, usePen, useBrush, useFont) {
// 	if (opts == null)
// 		opts = {};
// 	if (usePen) {
// 		var pen = this.state.selected.pen;
// 		if (pen.style != EMFJS.GDI.PenStyle.PS_NULL) {
// 			opts.stroke =  "#" + pen.color.toHex(), // TODO: pen style
// 			opts.strokeWidth = this._todevW(pen.width.x) // TODO: is .y ever used?
//
// 			var dotWidth;
// 			if ((pen.linecap & EMFJS.GDI.PenStyle.PS_ENDCAP_SQUARE) != 0) {
// 				opts["stroke-linecap"] = "square";
// 				dotWidth = 1;
// 			} else if ((pen.linecap & EMFJS.GDI.PenStyle.PS_ENDCAP_FLAT) != 0) {
// 				opts["stroke-linecap"] = "butt";
// 				dotWidth = opts.strokeWidth;
// 			} else {
// 				opts["stroke-linecap"] = "round";
// 				dotWidth = 1;
// 			}
//
// 			if ((pen.join & EMFJS.GDI.PenStyle.PS_JOIN_BEVEL) != 0)
// 				opts["stroke-linejoin"] = "bevel";
// 			else if ((pen.join & EMFJS.GDI.PenStyle.PS_JOIN_MITER) != 0)
// 				opts["stroke-linejoin"] = "miter";
// 			else
// 				opts["stroke-linejoin"] = "round";
//
// 			var dashWidth = opts.strokeWidth * 4;
// 			var dotSpacing = opts.strokeWidth * 2;
// 			switch (pen.style) {
// 				case EMFJS.GDI.PenStyle.PS_DASH:
// 					opts["stroke-dasharray"] = [dashWidth, dotSpacing].toString();
// 					break;
// 				case EMFJS.GDI.PenStyle.PS_DOT:
// 					opts["stroke-dasharray"] = [dotWidth, dotSpacing].toString();
// 					break;
// 				case EMFJS.GDI.PenStyle.PS_DASHDOT:
// 					opts["stroke-dasharray"] = [dashWidth, dotSpacing, dotWidth, dotSpacing].toString();
// 					break;
// 				case EMFJS.GDI.PenStyle.PS_DASHDOTDOT:
// 					opts["stroke-dasharray"] = [dashWidth, dotSpacing, dotWidth, dotSpacing, dotWidth, dotSpacing].toString();
// 					break;
// 			}
// 		}
// 	}
// 	if (useBrush) {
// 		var brush = this.state.selected.brush;
// 		switch (brush.style) {
// 			case EMFJS.GDI.BrushStyle.BS_SOLID:
// 				opts.fill = "#" + brush.color.toHex();
// 				break;
// 			case EMFJS.GDI.BrushStyle.BS_PATTERN:
// 			case EMFJS.GDI.BrushStyle.BS_DIBPATTERNPT:
// 				opts.fill = "url(#" + this._getSvgPatternForBrush(brush) + ")";
// 				break;
// 			case EMFJS.GDI.BrushStyle.BS_NULL:
// 				opts.fill = "none";
// 				break;
// 			default:
// 				EMFJS.log("[gdi] unsupported brush style: " + brush.style);
// 				opts.fill = "none";
// 				break;
// 		}
// 	}
// 	if (useFont) {
// 		var font = this.state.selected.font;
// 		opts["font-family"] = font.facename;
// 		opts["font-size"] = this._todevH(Math.abs(font.height));
// 		opts["fill"] = "#" + this.state.textcolor.toHex();
// 	}
// 	return opts;
// };
//
// EMFJS.GDIContext.prototype.rectangle = function(rect, rw, rh) {
// 	EMFJS.log("[gdi] rectangle: rect=" + rect.toString() + " with pen " + this.state.selected.pen.toString() + " and brush " + this.state.selected.brush.toString());
// 	var bottom = this._todevY(rect.bottom);
// 	var right = this._todevX(rect.right);
// 	var top = this._todevY(rect.top);
// 	var left = this._todevX(rect.left);
// 	rw = this._todevH(rw);
// 	rh = this._todevH(rh);
// 	EMFJS.log("[gdi] rectangle: TRANSLATED: bottom=" + bottom + " right=" + right + " top=" + top + " left=" + left + " rh=" + rh + " rw=" + rw);
// 	this._pushGroup();
//
// 	var opts = this._applyOpts(null, true, true, false);
// 	this._svg.rect(this.state._svggroup, left, top, right - left, bottom - top, rw / 2, rh / 2, opts);
// };
//
// EMFJS.GDIContext.prototype.textOut = function(x, y, text) {
// 	EMFJS.log("[gdi] textOut: x=" + x + " y=" + y + " text=" + text + " with font " + this.state.selected.font.toString());
// 	x = this._todevX(x);
// 	y = this._todevY(y);
// 	EMFJS.log("[gdi] textOut: TRANSLATED: x=" + x + " y=" + y);
// 	this._pushGroup();
//
// 	var opts = this._applyOpts(null, false, false, true);
// 	if (this.state.selected.font.escapement != 0) {
// 		opts.transform = "rotate(" + [(-this.state.selected.font.escapement / 10), x, y] + ")";
// 		opts.style = "dominant-baseline: middle; text-anchor: start;";
// 	}
// 	if (this.state.bkmode == EMFJS.GDI.MixMode.OPAQUE) {
// 		if (this.state._svgtextbkfilter == null) {
// 			var filterId = EMFJS._makeUniqueId("f");
// 			var filter = this._svg.filter(this._getSvgDef(), filterId, 0, 0, 1, 1);
// 			this._svg.filters.flood(filter, null, "#" + this.state.bkcolor.toHex(), 1.0);
// 			this._svg.filters.composite(filter, null, null, "SourceGraphic");
// 			this.state._svgtextbkfilter = filter;
// 		}
//
// 		opts.filter = "url(#" + $(this.state._svgtextbkfilter).attr("id") + ")";
// 	}
// 	this._svg.text(this.state._svggroup, x, y, text, opts);
// };
//
// EMFJS.GDIContext.prototype.extTextOut = function(x, y, text, fwOpts, rect, dx) {
// 	EMFJS.log("[gdi] extTextOut: x=" + x + " y=" + y + " text=" + text + " with font " + this.state.selected.font.toString());
// 	x = this._todevX(x);
// 	y = this._todevY(y);
// 	EMFJS.log("[gdi] extTextOut: TRANSLATED: x=" + x + " y=" + y);
// 	this._pushGroup();
//
// 	var opts = this._applyOpts(null, false, false, true);
// 	if (this.state.selected.font.escapement != 0) {
// 		opts.transform = "rotate(" + [(-this.state.selected.font.escapement / 10), x, y] + ")";
// 		opts.style = "dominant-baseline: middle; text-anchor: start;";
// 	}
// 	if (this.state.bkmode == EMFJS.GDI.MixMode.OPAQUE) {
// 		if (this.state._svgtextbkfilter == null) {
// 			var filterId = EMFJS._makeUniqueId("f");
// 			var filter = this._svg.filter(this._getSvgDef(), filterId, 0, 0, 1, 1);
// 			this._svg.filters.flood(filter, null, "#" + this.state.bkcolor.toHex(), 1.0);
// 			this._svg.filters.composite(filter, null, null, "SourceGraphic");
// 			this.state._svgtextbkfilter = filter;
// 		}
//
// 		opts.filter = "url(#" + $(this.state._svgtextbkfilter).attr("id") + ")";
// 	}
// 	this._svg.text(this.state._svggroup, x, y, text, opts);
// };
//
// EMFJS.GDIContext.prototype.lineTo = function(x, y) {
// 	EMFJS.log("[gdi] lineTo: x=" + x + " y=" + y + " with pen " + this.state.selected.pen.toString());
// 	var toX = this._todevX(x);
// 	var toY = this._todevY(y);
// 	var fromX = this._todevX(this.state.x);
// 	var fromY = this._todevY(this.state.y);
//
// 	// Update position
// 	this.state.x = x;
// 	this.state.y = y;
//
// 	EMFJS.log("[gdi] lineTo: TRANSLATED: toX=" + toX + " toY=" + toY + " fromX=" + fromX + " fromY=" + fromY);
// 	this._pushGroup();
//
// 	var opts = this._applyOpts(null, true, false, false);
// 	this._svg.line(this.state._svggroup, fromX, fromY, toX, toY, opts);
// }
//
// EMFJS.GDIContext.prototype.moveTo = function(x, y) {
// 	EMFJS.log("[gdi] moveTo: x=" + x + " y=" + y);
// 	this.state.x = x;
// 	this.state.y = y;
// }
//
// EMFJS.GDIContext.prototype.polygon = function(points) {
// 	EMFJS.log("[gdi] polygon: points=" + points + " with pen " + this.state.selected.pen.toString() + " and brush " + this.state.selected.brush.toString());
// 	var pts = [];
// 	for (var i = 0; i < points.length; i++) {
// 		var point = points[i];
// 		pts.push([this._todevX(point.x), this._todevY(point.y)]);
// 	}
// 	EMFJS.log("[gdi] polygon: TRANSLATED: pts=" + pts);
// 	this._pushGroup();
// 	var opts = {
// 		"fill-rule": this.state.polyfillmode == EMFJS.GDI.PolyFillMode.ALTERNATE ? "evenodd" : "nonzero",
// 	};
// 	this._applyOpts(opts, true, true, false);
// 	this._svg.polygon(this.state._svggroup, pts, opts);
// };
//
// EMFJS.GDIContext.prototype.polyPolygon = function(polyPolygon) {
// 	EMFJS.log("[gdi] polyPolygon: polyPolygon=" + JSON.stringify(polyPolygon) + " with pen " + this.state.selected.pen.toString() + " and brush " + this.state.selected.brush.toString());
// 	this._pushGroup();
// 	var cnt = polyPolygon._polygons.length;
// 	for (var i = 0; i < cnt; i++)
// 		this.polygon(polyPolygon._polygons[i]);
// };
//
// EMFJS.GDIContext.prototype.polyline = function(points) {
// 	EMFJS.log("[gdi] polyline: points=" + points + " with pen " + this.state.selected.pen.toString());
// 	var pts = [];
// 	for (var i = 0; i < points.length; i++) {
// 		var point = points[i];
// 		pts.push([this._todevX(point.x), this._todevY(point.y)]);
// 	}
// 	EMFJS.log("[gdi] polyline: TRANSLATED: pts=" + pts);
// 	this._pushGroup();
// 	var opts = this._applyOpts({fill: "none"}, true, false, false);
// 	this._svg.polyline(this.state._svggroup, pts, opts);
// };
//
// EMFJS.GDIContext.prototype.ellipse = function(rect) {
// 	EMFJS.log("[gdi] ellipse: rect=" + rect.toString() + " with pen " + this.state.selected.pen.toString() + " and brush " + this.state.selected.brush.toString());
// 	var bottom = this._todevY(rect.bottom);
// 	var right = this._todevX(rect.right);
// 	var top = this._todevY(rect.top);
// 	var left = this._todevX(rect.left);
// 	EMFJS.log("[gdi] ellipse: TRANSLATED: bottom=" + bottom + " right=" + right + " top=" + top + " left=" + left);
// 	this._pushGroup();
// 	var width2 = (right - left) / 2;
// 	var height2 = (bottom - top) / 2;
// 	var opts = this._applyOpts(null, true, true, false);
// 	this._svg.ellipse(this.state._svggroup, left + width2, top + height2, width2, height2, opts);
// };
//
// EMFJS.GDIContext.prototype.excludeClipRect = function(rect) {
// 	EMFJS.log("[gdi] excludeClipRect: rect=" + rect.toString());
// 	this._getClipRgn().subtract(rect);
// };
//
// EMFJS.GDIContext.prototype.intersectClipRect = function(rect) {
// 	EMFJS.log("[gdi] intersectClipRect: rect=" + rect.toString());
// 	this._getClipRgn().intersect(rect);
// };
//
// EMFJS.GDIContext.prototype.offsetClipRgn = function(offX, offY) {
// 	EMFJS.log("[gdi] offsetClipRgn: offX=" + offX + " offY=" + offY);
// 	this._getClipRgn().offset(offX, offY);
// };
//
// EMFJS.GDIContext.prototype.setTextAlign = function(textAlignmentMode) {
// 	EMFJS.log("[gdi] setTextAlign: textAlignmentMode=0x" + textAlignmentMode.toString(16));
// 	this.state.textalign = textAlignmentMode;
// };
//
// EMFJS.GDIContext.prototype.setBkMode = function(bkMode) {
// 	EMFJS.log("[gdi] setBkMode: bkMode=0x" + bkMode.toString(16));
// 	this.state.bkmode = bkMode;
// };
//
// EMFJS.GDIContext.prototype.setTextColor = function(textColor) {
// 	EMFJS.log("[gdi] setTextColor: textColor=" + textColor.toString());
// 	this.state.textcolor = textColor;
// };
//
// EMFJS.GDIContext.prototype.setBkColor = function(bkColor) {
// 	EMFJS.log("[gdi] setBkColor: bkColor=" + bkColor.toString());
// 	this.state.bkcolor = bkColor;
// 	this.state._svgtextbkfilter = null;
// };
//
// EMFJS.GDIContext.prototype.setPolyFillMode = function(polyFillMode) {
// 	EMFJS.log("[gdi] setPolyFillMode: polyFillMode=" + polyFillMode);
// 	this.state.polyfillmode = polyFillMode;
// };
//
// EMFJS.GDIContext.prototype.createBrush = function(brush) {
// 	var idx = this._storeObject(brush);
// 	EMFJS.log("[gdi] createBrush: brush=" + brush.toString() + " with handle " + idx);
// };
//
// EMFJS.GDIContext.prototype.createFont = function(font) {
// 	var idx = this._storeObject(font);
// 	EMFJS.log("[gdi] createFont: font=" + font.toString() + " with handle " + idx);
// };
//
// EMFJS.GDIContext.prototype.createPen = function(pen) {
// 	var idx = this._storeObject(pen);
// 	EMFJS.log("[gdi] createPen: pen=" + pen.toString() + " width handle " + idx);
// };
//
// EMFJS.GDIContext.prototype.createPalette = function(palette) {
// 	var idx = this._storeObject(palette);
// 	EMFJS.log("[gdi] createPalette: palette=" + palette.toString() + " width handle " + idx);
// };
//
// EMFJS.GDIContext.prototype.createRegion = function(region) {
// 	var idx = this._storeObject(region);
// 	EMFJS.log("[gdi] createRegion: region=" + region.toString() + " width handle " + idx);
// };
//
// EMFJS.GDIContext.prototype.createPatternBrush = function(patternBrush) {
// 	var idx = this._storeObject(patternBrush);
// 	EMFJS.log("[gdi] createRegion: region=" + patternBrush.toString() + " width handle " + idx);
// };
//
// EMFJS.GDIContext.prototype.selectObject = function(objIdx, checkType) {
// 	var obj = this._getObject(objIdx);
// 	if (obj != null && (checkType == null || obj.type == checkType)) {
// 		this._selectObject(obj);
// 		EMFJS.log("[gdi] selectObject: objIdx=" + objIdx + (obj ? " selected " + obj.type + ": " + obj.toString() : "[invalid index]"));
// 	} else {
// 		EMFJS.log("[gdi] selectObject: objIdx=" + objIdx + (obj ? " invalid object type: " + obj.type : "[invalid index]"));
// 	}
// };
//
// EMFJS.GDIContext.prototype.deleteObject = function(objIdx) {
// 	var ret = this._deleteObject(objIdx);
// 	EMFJS.log("[gdi] deleteObject: objIdx=" + objIdx + (ret ? " deleted object" : "[invalid index]"));
// };
//
// EMFJS.EMFRect16 = function(reader) {
// 	this.left = reader.readInt16();
// 	this.top = reader.readInt16();
// 	this.right = reader.readInt16();
// 	this.bottom = reader.readInt16();
// };
//
// EMFJS.EMFRect16.prototype.toString = function() {
// 	return "{left: " + this.left + ", top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + "}";
// };

EMFJS.EMFRecords = function(reader, first) {
	this._records = [];
	
	var all = false;
	var curpos = first;
	main_loop: while (!all) {
		reader.seek(curpos);
		var type = reader.readUint32();
		var size = reader.readUint32();
		if (size < 8)
			throw new EMFJS.Error("Invalid record size");
		switch (type) {
			case EMFJS.GDI.RecordType.EMR_EOF:
				all = true;
				break main_loop;
			// case EMFJS.GDI.RecordType.META_SETMAPMODE:
			// 	var mapMode = reader.readUint16();
			// 	this._records.push(
			// 		(function(mapMode) {
			// 			return function(gdi) {
			// 				gdi.setMapMode(mapMode);
			// 			}
			// 		})(mapMode)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETWINDOWORG:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	this._records.push(
			// 		(function(y, x) {
			// 			return function(gdi) {
			// 				gdi.setWindowOrg(x, y);
			// 			}
			// 		})(y, x)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETWINDOWEXT:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	this._records.push(
			// 		(function(y, x) {
			// 			return function(gdi) {
			// 				gdi.setWindowExt(x, y);
			// 			}
			// 		})(y, x)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_OFFSETWINDOWORG:
			// 	var offY = reader.readInt16();
			// 	var offX = reader.readInt16();
			// 	this._records.push(
			// 		(function(offY, offX) {
			// 			return function(gdi) {
			// 				gdi.offsetWindowOrg(offX, offY);
			// 			}
			// 		})(offY, offX)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETVIEWPORTORG:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	this._records.push(
			// 		(function(y, x) {
			// 			return function(gdi) {
			// 				gdi.setViewportOrg(x, y);
			// 			}
			// 		})(y, x)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETVIEWPORTEXT:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	this._records.push(
			// 		(function(y, x) {
			// 			return function(gdi) {
			// 				gdi.setViewportExt(x, y);
			// 			}
			// 		})(y, x)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_OFFSETVIEWPORTORG:
			// 	var offY = reader.readInt16();
			// 	var offX = reader.readInt16();
			// 	this._records.push(
			// 		(function(offY, offX) {
			// 			return function(gdi) {
			// 				gdi.offsetViewportOrg(offX, offY);
			// 			}
			// 		})(offY, offX)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SAVEDC:
			// 	this._records.push(function(gdi) {
			// 		gdi.saveDC();
			// 	});
			// 	break;
			// case EMFJS.GDI.RecordType.META_RESTOREDC:
			// 	var saved = reader.readInt16();
			// 	this._records.push(
			// 		(function(saved) {
			// 			return function(gdi) {
			// 				gdi.restoreDC(saved);
			// 			}
			// 		})(saved)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETSTRETCHBLTMODE:
			// 	var stretchMode = reader.readUint16();
			// 	this._records.push(
			// 		(function(stretchMode) {
			// 			return function(gdi) {
			// 				gdi.setStretchBltMode(stretchMode);
			// 			}
			// 		})(stretchMode)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_DIBSTRETCHBLT:
			// 	var haveSrcDib = ((type >> 8) + 3 != size);
			// 	var rasterOp = reader.readUint16() | (reader.readUint16() << 16);
			// 	var srcH = reader.readInt16();
			// 	var srcW = reader.readInt16();
			// 	var srcY = reader.readInt16();
			// 	var srcX = reader.readInt16();
			// 	var destH = reader.readInt16();
			// 	var destW = reader.readInt16();
			// 	var destY = reader.readInt16();
			// 	var destX = reader.readInt16();
			// 	var datalength = size * 2 - (reader.pos - curpos);
			// 	var dib = new EMFJS.DIBitmap(reader, datalength);
			// 	this._records.push(
			// 		(function(rasterOp, srcH, srcW, srcY, srcX, destH, destW, destY, destX, dib) {
			// 			return function(gdi) {
			// 				gdi.stretchDibBits(srcX, srcY, srcW, srcH, destX, destY, destW, destH, rasterOp, dib);
			// 			}
			// 		})(rasterOp, srcH, srcW, srcY, srcX, destH, destW, destY, destX, dib)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_STRETCHDIB:
			// 	var rasterOp = reader.readUint16() | (reader.readUint16() << 16);
			// 	var colorUsage = reader.readInt16();
			// 	var srcH = reader.readInt16();
			// 	var srcW = reader.readInt16();
			// 	var srcY = reader.readInt16();
			// 	var srcX = reader.readInt16();
			// 	var destH = reader.readInt16();
			// 	var destW = reader.readInt16();
			// 	var destY = reader.readInt16();
			// 	var destX = reader.readInt16();
			// 	var datalength = size * 2 - (reader.pos - curpos);
			// 	var dib = new EMFJS.DIBitmap(reader, datalength);
			// 	this._records.push(
			// 		(function(rasterOp, colorUsage, srcH, srcW, srcY, srcX, destH, destW, destY, destX, dib) {
			// 			return function(gdi) {
			// 				gdi.stretchDib(srcX, srcY, srcW, srcH, destX, destY, destW, destH, rasterOp, colorUsage, dib);
			// 			}
			// 		})(rasterOp, colorUsage, srcH, srcW, srcY, srcX, destH, destW, destY, destX, dib)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_ESCAPE:
			// 	var func = reader.readUint16();
			// 	var count = reader.readUint16();
			// 	var offset = reader.pos;
			// 	var blob = new EMFJS.Blob(reader, offset);
			// 	this._records.push(
			// 		(function(func, count, offset, blob) {
			// 			return function(gdi) {
			// 				gdi.escape(func, blob, offset, count);
			// 			}
			// 		})(func, count, offset, blob)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETTEXTALIGN:
			// 	var textAlign = reader.readUint16();
			// 	this._records.push(
			// 		(function(textAlign) {
			// 			return function(gdi) {
			// 				gdi.setTextAlign(textAlign);
			// 			}
			// 		})(textAlign)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETBKMODE:
			// 	var bkMode = reader.readUint16();
			// 	this._records.push(
			// 		(function(bkMode) {
			// 			return function(gdi) {
			// 				gdi.setBkMode(bkMode);
			// 			}
			// 		})(bkMode)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETTEXTCOLOR:
			// 	var textColor = new EMFJS.ColorRef(reader);
			// 	this._records.push(
			// 		(function(textColor) {
			// 			return function(gdi) {
			// 				gdi.setTextColor(textColor);
			// 			}
			// 		})(textColor)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETBKCOLOR:
			// 	var bkColor = new EMFJS.ColorRef(reader);
			// 	this._records.push(
			// 		(function(bkColor) {
			// 			return function(gdi) {
			// 				gdi.setBkColor(bkColor);
			// 			}
			// 		})(bkColor)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_CREATEBRUSHINDIRECT:
			// 	var datalength = size * 2 - (reader.pos - curpos);
			// 	var brush = new EMFJS.Brush(reader, datalength, false);
			// 	this._records.push(
			// 		(function(brush, datalength) {
			// 			return function(gdi) {
			// 				gdi.createBrush(brush);
			// 			}
			// 		})(brush, datalength)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_DIBCREATEPATTERNBRUSH:
			// 	var datalength = size * 2 - (reader.pos - curpos);
			// 	var brush = new EMFJS.Brush(reader, datalength, true);
			// 	this._records.push(
			// 		(function(brush, datalength) {
			// 			return function(gdi) {
			// 				gdi.createBrush(brush);
			// 			}
			// 		})(brush, datalength)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_CREATEPENINDIRECT:
			// 	var pen = new EMFJS.Pen(reader);
			// 	this._records.push(
			// 		(function(pen) {
			// 			return function(gdi) {
			// 				gdi.createPen(pen);
			// 			}
			// 		})(pen)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_CREATEFONTINDIRECT:
			// 	var datalength = size * 2 - (reader.pos - curpos);
			// 	var font = new EMFJS.Font(reader, datalength);
			// 	this._records.push(
			// 		(function(font, datalength) {
			// 			return function(gdi) {
			// 				gdi.createFont(font);
			// 			}
			// 		})(font, datalength)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SELECTOBJECT:
			// 	var idx = reader.readUint16();
			// 	this._records.push(
			// 		(function(idx) {
			// 			return function(gdi) {
			// 				gdi.selectObject(idx, null);
			// 			}
			// 		})(idx)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SELECTPALETTE:
			// 	var idx = reader.readUint16();
			// 	this._records.push(
			// 		(function(idx) {
			// 			return function(gdi) {
			// 				gdi.selectObject(idx, "palette");
			// 			}
			// 		})(idx)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SELECTCLIPREGION:
			// 	var idx = reader.readUint16();
			// 	this._records.push(
			// 		(function(idx) {
			// 			return function(gdi) {
			// 				gdi.selectObject(idx, "region");
			// 			}
			// 		})(idx)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_DELETEOBJECT:
			// 	var idx = reader.readUint16();
			// 	this._records.push(
			// 		(function(idx) {
			// 			return function(gdi) {
			// 				gdi.deleteObject(idx);
			// 			}
			// 		})(idx)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_RECTANGLE:
			// 	var rect = new EMFJS.Rect(reader);
			// 	this._records.push(
			// 		(function(rect) {
			// 			return function(gdi) {
			// 				gdi.rectangle(rect, 0, 0);
			// 			}
			// 		})(rect)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_ROUNDRECT:
			// 	var rh = reader.readInt16();
			// 	var rw = reader.readInt16();
			// 	var rect = new EMFJS.Rect(reader);
			// 	this._records.push(
			// 		(function(rh, rw, rect) {
			// 			return function(gdi) {
			// 				gdi.rectangle(rect, rw, rh);
			// 			}
			// 		})(rh, rw, rect)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_LINETO:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	this._records.push(
			// 		(function(y, x) {
			// 			return function(gdi) {
			// 				gdi.lineTo(x, y);
			// 			}
			// 		})(y, x)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_MOVETO:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	this._records.push(
			// 		(function(y, x) {
			// 			return function(gdi) {
			// 				gdi.moveTo(x, y);
			// 			}
			// 		})(y, x)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_TEXTOUT:
			// 	var len = reader.readInt16();
			// 	if (len > 0) {
			// 		var text = reader.readString(len);
			// 		reader.skip(len % 2);
			// 		var y = reader.readInt16();
			// 		var x = reader.readInt16();
			// 		this._records.push(
			// 			(function(text, y, x) {
			// 				return function(gdi) {
			// 					gdi.textOut(x, y, text);
			// 				}
			// 			})(text, y, x)
			// 		);
			// 	}
			// 	break;
			// case EMFJS.GDI.RecordType.META_EXTTEXTOUT:
			// 	var y = reader.readInt16();
			// 	var x = reader.readInt16();
			// 	var len = reader.readInt16();
			// 	var fwOpts = reader.readUint16();
            //
			// 	var hasRect = null;
			// 	var hasDx = null;
			// 	if(size * 2 === 14 + len + len % 2){
			// 		hasRect = false;
			// 		hasDx = false;
			// 	}
			// 	if(size * 2 === 14 + 8 + len + len % 2){
			// 		hasRect = true;
			// 		hasDx = false;
			// 	}
			// 	if(size * 2 === 14 + len + len % 2 + len * 2){
			// 		hasRect = false;
			// 		hasDx = true;
			// 	}
			// 	if(size * 2 === 14 + 8 + len + len % 2 + len * 2){
			// 		hasRect = true;
			// 		hasDx = true;
			// 	}
            //
			// 	var rect = hasRect ? new EMFJS.Rect(reader) : null;
			// 	if (len > 0) {
			// 		var text = reader.readString(len);
			// 		reader.skip(len % 2);
            //
			// 		var dx = [];
			// 		if(hasDx) {
			// 			for (var i = 0; i < text.length; i++) {
			// 				dx.push(reader.readInt16());
			// 			}
			// 		}
            //
			// 		this._records.push(
			// 			(function(x, y, text, fwOpts, rect, dx) {
			// 				return function(gdi) {
			// 					gdi.extTextOut(x, y, text, fwOpts, rect, dx);
			// 				}
			// 			})(x, y, text, fwOpts, rect, dx)
			// 		);
			// 	}
			// 	break;
			// case EMFJS.GDI.RecordType.META_EXCLUDECLIPRECT:
			// 	var rect = new EMFJS.Rect(reader);
			// 	this._records.push(
			// 		(function(rect) {
			// 			return function(gdi) {
			// 				gdi.excludeClipRect(rect);
			// 			}
			// 		})(rect)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_INTERSECTCLIPRECT:
			// 	var rect = new EMFJS.Rect(reader);
			// 	this._records.push(
			// 		(function(rect) {
			// 			return function(gdi) {
			// 				gdi.intersectClipRect(rect);
			// 			}
			// 		})(rect)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_POLYGON:
			// 	var cnt = reader.readInt16();
			// 	var points = [];
			// 	while (cnt > 0) {
			// 		points.push(new EMFJS.PointS(reader));
			// 		cnt--;
			// 	}
			// 	this._records.push(
			// 		(function(points) {
			// 			return function(gdi) {
			// 				gdi.polygon(points);
			// 			}
			// 		})(points)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_SETPOLYFILLMODE:
			// 	var polyfillmode = reader.readUint16();
			// 	this._records.push(
			// 		(function(polyfillmode) {
			// 			return function(gdi) {
			// 				gdi.setPolyFillMode(polyfillmode);
			// 			}
			// 		})(polyfillmode)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_POLYPOLYGON:
			// 	var polyPolygon = new EMFJS.PolyPolygon(reader);
			// 	this._records.push(
			// 		(function(polyPolygon) {
			// 			return function(gdi) {
			// 				gdi.polyPolygon(polyPolygon);
			// 			}
			// 		})(polyPolygon)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_POLYLINE:
			// 	var cnt = reader.readInt16();
			// 	var points = [];
			// 	while (cnt > 0) {
			// 		points.push(new EMFJS.PointS(reader));
			// 		cnt--;
			// 	}
			// 	this._records.push(
			// 		(function(points) {
			// 			return function(gdi) {
			// 				gdi.polyline(points);
			// 			}
			// 		})(points)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_ELLIPSE:
			// 	var rect = new EMFJS.Rect(reader);
			// 	this._records.push(
			// 		(function(rect) {
			// 			return function(gdi) {
			// 				gdi.ellipse(rect);
			// 			}
			// 		})(rect)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_CREATEPALETTE:
			// 	var palette = new EMFJS.Palette(reader);
			// 	this._records.push(
			// 		(function(palette) {
			// 			return function(gdi) {
			// 				gdi.createPalette(palette);
			// 			}
			// 		})(palette)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_CREATEREGION:
			// 	var region = new EMFJS.Region(reader);
			// 	this._records.push(
			// 		(function(region) {
			// 			return function(gdi) {
			// 				gdi.createRegion(region);
			// 			}
			// 		})(region)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_CREATEPATTERNBRUSH:
			// 	var datalength = size * 2 - (reader.pos - curpos);
			// 	var patternBitmap = new EMFJS.PatternBitmap16(reader, datalength);
			// 	var brush = new EMFJS.Brush(reader, datalength, patternBitmap);
			// 	this._records.push(
			// 		(function(brush) {
			// 			return function(gdi) {
			// 				gdi.createPatternBrush(brush);
			// 			}
			// 		})(brush)
			// 	);
			// 	break;
			// case EMFJS.GDI.RecordType.META_OFFSETCLIPRGN:
			// 	var offY = reader.readInt16();
			// 	var offX = reader.readInt16();
			// 	this._records.push(
			// 		(function(offY, offX) {
			// 			return function(gdi) {
			// 				gdi.offsetClipRgn(offX, offY);
			// 			}
			// 		})(offY, offX)
			// 	);
			// 	break;
			case EMFJS.GDI.RecordType.EMR_POLYBEZIER:
			case EMFJS.GDI.RecordType.EMR_POLYGON:
			case EMFJS.GDI.RecordType.EMR_POLYLINE:
			case EMFJS.GDI.RecordType.EMR_POLYBEZIERTO:
			case EMFJS.GDI.RecordType.EMR_POLYLINETO:
			case EMFJS.GDI.RecordType.EMR_POLYPOLYLINE:
			case EMFJS.GDI.RecordType.EMR_POLYPOLYGON:
			case EMFJS.GDI.RecordType.EMR_SETWINDOWEXTEX:
			case EMFJS.GDI.RecordType.EMR_SETWINDOWORGEX:
			case EMFJS.GDI.RecordType.EMR_SETVIEWPORTEXTEX:
			case EMFJS.GDI.RecordType.EMR_SETVIEWPORTORGEX:
			case EMFJS.GDI.RecordType.EMR_SETBRUSHORGEX:
			case EMFJS.GDI.RecordType.EMR_SETPIXELV:
			case EMFJS.GDI.RecordType.EMR_SETMAPPERFLAGS:
			case EMFJS.GDI.RecordType.EMR_SETMAPMODE:
			case EMFJS.GDI.RecordType.EMR_SETBKMODE:
			case EMFJS.GDI.RecordType.EMR_SETPOLYFILLMODE:
			case EMFJS.GDI.RecordType.EMR_SETROP2:
			case EMFJS.GDI.RecordType.EMR_SETSTRETCHBLTMODE:
			case EMFJS.GDI.RecordType.EMR_SETTEXTALIGN:
			case EMFJS.GDI.RecordType.EMR_SETCOLORADJUSTMENT:
			case EMFJS.GDI.RecordType.EMR_SETTEXTCOLOR:
			case EMFJS.GDI.RecordType.EMR_SETBKCOLOR:
			case EMFJS.GDI.RecordType.EMR_OFFSETCLIPRGN:
			case EMFJS.GDI.RecordType.EMR_MOVETOEX:
			case EMFJS.GDI.RecordType.EMR_SETMETARGN:
			case EMFJS.GDI.RecordType.EMR_EXCLUDECLIPRECT:
			case EMFJS.GDI.RecordType.EMR_INTERSECTCLIPRECT:
			case EMFJS.GDI.RecordType.EMR_SCALEVIEWPORTEXTEX:
			case EMFJS.GDI.RecordType.EMR_SCALEWINDOWEXTEX:
			case EMFJS.GDI.RecordType.EMR_SAVEDC:
			case EMFJS.GDI.RecordType.EMR_RESTOREDC:
			case EMFJS.GDI.RecordType.EMR_SETWORLDTRANSFORM:
			case EMFJS.GDI.RecordType.EMR_MODIFYWORLDTRANSFORM:
			case EMFJS.GDI.RecordType.EMR_SELECTOBJECT:
			case EMFJS.GDI.RecordType.EMR_CREATEPEN:
			case EMFJS.GDI.RecordType.EMR_CREATEBRUSHINDIRECT:
			case EMFJS.GDI.RecordType.EMR_DELETEOBJECT:
			case EMFJS.GDI.RecordType.EMR_ANGLEARC:
			case EMFJS.GDI.RecordType.EMR_ELLIPSE:
			case EMFJS.GDI.RecordType.EMR_RECTANGLE:
			case EMFJS.GDI.RecordType.EMR_ROUNDRECT:
			case EMFJS.GDI.RecordType.EMR_ARC:
			case EMFJS.GDI.RecordType.EMR_CHORD:
			case EMFJS.GDI.RecordType.EMR_PIE:
			case EMFJS.GDI.RecordType.EMR_SELECTPALETTE:
			case EMFJS.GDI.RecordType.EMR_CREATEPALETTE:
			case EMFJS.GDI.RecordType.EMR_SETPALETTEENTRIES:
			case EMFJS.GDI.RecordType.EMR_RESIZEPALETTE:
			case EMFJS.GDI.RecordType.EMR_REALIZEPALETTE:
			case EMFJS.GDI.RecordType.EMR_EXTFLOODFILL:
			case EMFJS.GDI.RecordType.EMR_LINETO:
			case EMFJS.GDI.RecordType.EMR_ARCTO:
			case EMFJS.GDI.RecordType.EMR_POLYDRAW:
			case EMFJS.GDI.RecordType.EMR_SETARCDIRECTION:
			case EMFJS.GDI.RecordType.EMR_SETMITERLIMIT:
			case EMFJS.GDI.RecordType.EMR_BEGINPATH:
			case EMFJS.GDI.RecordType.EMR_ENDPATH:
			case EMFJS.GDI.RecordType.EMR_CLOSEFIGURE:
			case EMFJS.GDI.RecordType.EMR_FILLPATH:
			case EMFJS.GDI.RecordType.EMR_STROKEANDFILLPATH:
			case EMFJS.GDI.RecordType.EMR_STROKEPATH:
			case EMFJS.GDI.RecordType.EMR_FLATTENPATH:
			case EMFJS.GDI.RecordType.EMR_WIDENPATH:
			case EMFJS.GDI.RecordType.EMR_SELECTCLIPPATH:
			case EMFJS.GDI.RecordType.EMR_ABORTPATH:
			case EMFJS.GDI.RecordType.EMR_COMMENT:
			case EMFJS.GDI.RecordType.EMR_FILLRGN:
			case EMFJS.GDI.RecordType.EMR_FRAMERGN:
			case EMFJS.GDI.RecordType.EMR_INVERTRGN:
			case EMFJS.GDI.RecordType.EMR_PAINTRGN:
			case EMFJS.GDI.RecordType.EMR_EXTSELECTCLIPRGN:
			case EMFJS.GDI.RecordType.EMR_BITBLT:
			case EMFJS.GDI.RecordType.EMR_STRETCHBLT:
			case EMFJS.GDI.RecordType.EMR_MASKBLT:
			case EMFJS.GDI.RecordType.EMR_PLGBLT:
			case EMFJS.GDI.RecordType.EMR_SETDIBITSTODEVICE:
			case EMFJS.GDI.RecordType.EMR_STRETCHDIBITS:
			case EMFJS.GDI.RecordType.EMR_EXTCREATEFONTINDIRECTW:
			case EMFJS.GDI.RecordType.EMR_EXTTEXTOUTA:
			case EMFJS.GDI.RecordType.EMR_EXTTEXTOUTW:
			case EMFJS.GDI.RecordType.EMR_POLYBEZIER16:
			case EMFJS.GDI.RecordType.EMR_POLYGON16:
			case EMFJS.GDI.RecordType.EMR_POLYLINE16:
			case EMFJS.GDI.RecordType.EMR_POLYBEZIERTO16:
			case EMFJS.GDI.RecordType.EMR_POLYLINETO16:
			case EMFJS.GDI.RecordType.EMR_POLYPOLYLINE16:
			case EMFJS.GDI.RecordType.EMR_POLYPOLYGON16:
			case EMFJS.GDI.RecordType.EMR_POLYDRAW16:
			case EMFJS.GDI.RecordType.EMR_CREATEMONOBRUSH:
			case EMFJS.GDI.RecordType.EMR_CREATEDIBPATTERNBRUSHPT:
			case EMFJS.GDI.RecordType.EMR_EXTCREATEPEN:
			case EMFJS.GDI.RecordType.EMR_POLYTEXTOUTA:
			case EMFJS.GDI.RecordType.EMR_POLYTEXTOUTW:
			case EMFJS.GDI.RecordType.EMR_SETICMMODE:
			case EMFJS.GDI.RecordType.EMR_CREATECOLORSPACE:
			case EMFJS.GDI.RecordType.EMR_SETCOLORSPACE:
			case EMFJS.GDI.RecordType.EMR_DELETECOLORSPACE:
			case EMFJS.GDI.RecordType.EMR_GLSRECORD:
			case EMFJS.GDI.RecordType.EMR_GLSBOUNDEDRECORD:
			case EMFJS.GDI.RecordType.EMR_PIXELFORMAT:
			case EMFJS.GDI.RecordType.EMR_DRAWESCAPE:
			case EMFJS.GDI.RecordType.EMR_EXTESCAPE:
			case EMFJS.GDI.RecordType.EMR_SMALLTEXTOUT:
			case EMFJS.GDI.RecordType.EMR_FORCEUFIMAPPING:
			case EMFJS.GDI.RecordType.EMR_NAMEDESCAPE:
			case EMFJS.GDI.RecordType.EMR_COLORCORRECTPALETTE:
			case EMFJS.GDI.RecordType.EMR_SETICMPROFILEA:
			case EMFJS.GDI.RecordType.EMR_SETICMPROFILEW:
			case EMFJS.GDI.RecordType.EMR_ALPHABLEND:
			case EMFJS.GDI.RecordType.EMR_SETLAYOUT:
			case EMFJS.GDI.RecordType.EMR_TRANSPARENTBLT:
			case EMFJS.GDI.RecordType.EMR_GRADIENTFILL:
			case EMFJS.GDI.RecordType.EMR_SETLINKEDUFIS:
			case EMFJS.GDI.RecordType.EMR_SETTEXTJUSTIFICATION:
			case EMFJS.GDI.RecordType.EMR_COLORMATCHTOTARGETW:
			case EMFJS.GDI.RecordType.EMR_CREATECOLORSPACEW:
				EMFJS.log("[EMF] record 0x" + type.toString(16) + " at offset 0x" + curpos.toString(16) + " with " + size + " bytes");
				break;
			default:
				EMFJS.log("[EMF] UNKNOWN record 0x" + type.toString(16) + " at offset 0x" + curpos.toString(16) + " with " + size + " bytes");
				//throw new EMFJS.Error("Record type not recognized: 0x" + type.toString(16));
				break;
		}
		
		curpos += size;
	}
	
	if (!all)
		throw new EMFJS.Error("Could not read all records");
};

EMFJS.EMFRecords.prototype.play = function(gdi) {
	var len = this._records.length;
	for (var i = 0; i < len; i++) {
		this._records[i].call(this, gdi);
	}
};

// EMFJS.EMFPlacable = function(reader) {
// 	reader.skip(2);
// 	this.boundingBox = new EMFJS.EMFRect16(reader);
// 	this.unitsPerInch = reader.readInt16();
// 	reader.skip(4);
// 	reader.skip(2); // TODO: checksum
// 	EMFJS.log("Got bounding box " + this.boundingBox + " and " + this.unitsPerInch + " units/inch");
// };

EMFJS.EMF = function(reader, hdrsize) {
	this._reader = reader;
	this._hdrsize = hdrsize;
	this._img = null;
	this._records = new EMFJS.EMFRecords(reader, this._hdrsize);
};

EMFJS.EMF.prototype.render = function(gdi) {
	this._records.play(gdi);
};

EMFJS.Renderer = function(blob) {
	this.parse(blob);
	EMFJS.log("EMFJS.Renderer instantiated");
};

EMFJS.Renderer.prototype.parse = function(blob) {
	this._img = null;
	
	var reader = new EMFJS.Blob(blob);
	
	var type = reader.readUint32();
	if(type !== 0x00000001){
		throw new EMFJS.error("Not an EMF File");
	}
	var size = reader.readUint32();

	this._img = new EMFJS.EMF(reader, size);
	
	if (this._img == null)
		throw new EMFJS.Error("Format not recognized");
};

EMFJS.Renderer.prototype._render = function(svg) {
	// See https://www-user.tu-chemnitz.de/~ygu/petzold/ch18b.htm
	var gdi = new EMFJS.GDIContext(svg);
	// gdi.setViewportExt(xExt, yExt);
	// gdi.setMapMode(mapMode);
	EMFJS.log("[EMF] BEGIN RENDERING --->");
	this._img.render(gdi);
	EMFJS.log("[EMF] <--- DONE RENDERING");
};

EMFJS.Renderer.prototype.render = function(info) {
	var inst = this;
	var img = (function(mapMode, xExt, yExt) {
		return $("<div>").svg({
			onLoad: function(svg) {
				return inst._render.call(inst, svg);
			},
			settings: {
				// viewBox: [0, 0, info.xExt, info.yExt].join(" "),
				preserveAspectRatio: "none" // TODO: MM_ISOTROPIC vs MM_ANISOTROPIC
			}
		});
	})();
	var svg = $(img[0]).svg("get");
	return $(svg.root()).attr("width", info.width).attr("height", info.height);
};