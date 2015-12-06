/* jslint node: true */
'use strict';

//
//	Config
//

var C =
{
	"keys":
	[



	], // [0], 'divinity', [3], 'firfumferenfe'

	"raw": "./data/liber",

	"encoding": "utf8",

	"delimiter":
	{
		"word":			"-",
		"clause":		".",
		"paragraph":	"&",
		"segment":		"$",
		"line":			"/",
		"page":			"%"
	},

	"passthrough": {'-': true, 'F': true, '0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true},

	"ioc":
	{
		"high": {"value": 1.5},
		"medium": {"value": 1.3},
		"low": {"value": 1.2,},
	},

	"oeis":
	{
		"file": "./data/oeis",

		"minchar":	1,
		"maxchar":	8,
		"binary": 	false,
		"limit":	10000
	},

	"dict":
	{
		"file": "./data/word",

		"minchar": 2,
		"maxchar": 6,
		"include": ['banana', 'ninja', 'WIS/ZDOM', 'C/KOAN', 'MAS/ZTER', 'PRIMES/Z'],
		"exclude": ['i', 'he', 'cat', 'dog']
	}
};

module.exports = C;


/*
	'INSTAR', 'WIDSOM', 'CICADA', 'JOURNEY', 'BELIEVE', 'STUDENT', 'FAREWELL', 'KWESTION', 'DISCOVER',
	'DIVINITY', 'STRUGGLE', 'SUFFERING', 'KNOWLEDGE', 'ENCRYPTED', 'ADHERENCE', 'PILGRIMAGE', 'EXPERIENCE',
	'CONSUMPTION', 'ENLIGHTENED', 'UNREASONABLE', 'INTELLIGENCE', 'PRESERVATION', 'CONSCIOUSNESS',
	'INTERCONNECTEDNESS'
*/