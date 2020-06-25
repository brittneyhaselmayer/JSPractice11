const doubleHash = (input) => {
	console.log(input['age'] * 2);
};

// doubleHash({ name: 'Britt', age: 20 });

const getFullName = (hash) => {
	console.log(hash.first + ' ' + hash.last + ', The ' + hash.title);
};
// hash1 = { first: 'Michael', last: 'Jordan', title: 'GOAT' };
// getFullName(hash1);

const wordLength = (sentence) => {
	let hash = {};
	let arr = sentence.split(' ');
	for (let i = 0; i < arr.length; i++) {
		hash[arr[i]] = arr[i].length;
	}
	console.log(hash);
};

// wordLength('Were counting the letters');

const retrieve = (hash1, hash2, k) => {
	let arr = [];
	arr.push(hash1[k]);
	arr.push(hash2[k]);
	console.log(arr);
};

// dog1 = { name: 'Fido', color: 'brown' };
// dog2 = { name: 'Spot', color: 'white' };

// retrieve(dog1, dog2, 'name');

const catBuilder = (name, color, age) => {
	console.log({ name, color, age });
};

// catBuilder('Tabby', 'Orange', 12);

const aeCount = (string) => {
	let aCount = 0;
	let eCount = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === 'a') {
			aCount += 1;
		}
		if (string[i] === 'e') {
			eCount += 1;
		}
	}
	console.log({ a: aCount, e: eCount });
};

// aeCount('aeiou aa eeee');

const elementCount = (arr) => {
	let hash = {};
	for (let i = 0; i < arr.length; i++) {
		if (!hash[arr[i]]) {
			hash[arr[i]] = 1;
		} else {
			hash[arr[i]] = hash[arr[i]] + 1;
		}
	}
	console.log(hash);
};

// elementCount([1, 1, 1, 'b', 'a', 3, 'b', 'hahah', 'hahah']);

const selectUpKeys = (hash) => {
	let keys = Object.keys(hash);
	let hash2 = {};
	let filtered = keys.filter((k) => k.toUpperCase() === k);
	filtered.forEach((ele) => (hash2[ele] = hash[ele]));
	console.log(hash2);
};

// let a = { DOG: 'pet', one: 'one', TWO: 'two', three: 3, MAN: 5 };

// selectUpKeys(a);

const handScore = (str) => {
	let total = 0;
	let scores = { A: 4, K: 3, Q: 2, J: 1 };
	let capital = str.toUpperCase().split('');
	capital.forEach((ele) => (total = total + scores[ele]));
	console.log(total);
};

// handScore('kJ');

const frequentLetters = (str) => {
	let hash = {};
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		if (!hash[str[i]]) {
			hash[str[i]] = 1;
		} else {
			hash[str[i]] = hash[str[i]] + 1;
		}
	}
	let kv = Object.entries(hash).flat();

	for (let i = 1; i < kv.length; i += 2) {
		if (kv[i] > 2) {
			arr.push(kv[i - 1]);
		}
	}
	console.log(arr);
};

// frequentLetters('mississippi');

const hashtopairs = (hash) => {
	console.log(Object.entries(hash));
};

// let a = { DOG: 'pet', one: 'one', TWO: 'two', three: 3, MAN: 5 };
// hashtopairs(a);

const uniqueEle = (arr) => {
	let hash = {};

	arr.forEach((ele) => {
		if (!hash[ele]) {
			hash[ele] = 1;
		} else {
			hash[ele] = hash[ele] + 1;
		}
	});

	console.log(Object.keys(hash));
};

// uniqueEle([1, 1, 1, 3, 4, 5]);
