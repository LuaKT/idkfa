###### Note: Might not always be up to date ######

### Liber Primus Translator ###

Takes Futhark and keys to produce clear text.
Calculates IoC and matches produced clear text against a dictionary.

Will output: Text shifted up/down from left to right along a forward and reverse Gematria. It's IoC and matched words.

##### Selecting segments #####

Liber can be split by (w)ord, (c)lause, (p)aragraph (s)egment (l)ine or (q)age (page).

```node

S.get({s:[]});					// Will get every segment
S.get({s:[15, 16]});			// Will get segment 15 and 16
S.get({c:[2, 3], p:[10, 11]});	// Will get clause 2 and 3, and paragraph 10 and 11
```

##### Selecting keys #####

Keys can be added as string ('divinity') or array [2, 3, 5, 7] or can be selected from ./data/oeis by name ('A010000'), index or range/offset. Keys will be added with forword or reverse offsets depending on param direction.

```node

K.add('divinity', 1);
K.add([0, 1, 2, 3, 4, 5]);
```

Key streams can be mapped against each other with multiple modifiers.

```node

// Stream of primes
var key01 = N.prime(current.maxchar);			// [2, 3, 5, 7, 11, ..]

// Stream of totients
var key02 = N.phi(current.maxchar);				// [0, 1, 1, 2, 2, ..]

// Sum of key01 and key02
var key03 = N.map(key01, key02, 's', 0);		// [2, 4, 6, 9, 13, ..]

// Difference of key01 and key02
var key04 = N.map(key01, key02, 'd', 0);		// [2, 2, 4, 5, 9, ..]

// Product of key01 and key02
var key05 = N.map(key01, key02, 'p', 0);		// [0, 3, 5, 14, 22, ..]

// Interweave key01 and key02
var key07 = N.weave(key01, key02);				// [2, 0, 3, 1, 5, ..]

// Stream of zeros
var key08 = N.stream(0, current.maxchar);		// [0, 0, 0, 0, 0, ..]

// Stream of primes -1
var key09 = N.map(key01, key08, 's', - 1);		// [1, 2, 4, 6, 10, ..]
```

To do multiple iterations of chunk with continuous key, pass iterations to E.process(data, iterations);

```node

E.process(data, 2);
```

Note: Keys from OEIS are sanitized and sanity checked on values given in config.js. OEIS file is still unsorted.

So

```node

O.get(0,100);
```

will most likely not return 100 keys.

### Setup ###

Cmd options are not yet implemented so you will have to edit source and run ./js/main.js.

Edit ./js/main.js for selecting chunks and keys, and ./js/lib/engine.js to play with keys.

```bash

$ npm update
$ node ./js/main.js
```

### Contribution guidelines ###

Please use tabs (width 4) and break {} to nl.

### Who do I talk to? ###

bugfixer@freenode
bugfixer@jabber.calyxinstitute.org