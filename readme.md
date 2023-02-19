# FED-Assignment-2
1. List the symbols for each of the below Javascript operators

Arithmetic Operators

+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

Assignment Operators

=	x = y	  x = y       Simple Assignment Operator 
+=	x += y	  x = x + y   Addition Assignment Operator
-=	x -= y	  x = x - y   Subtraction Assignment Operator
*=	x *= y	  x = x * y   Multiplication Assignment Operator 
/=	x /= y	  x = x / y   Division Assignment Operator
%=	x %= y	  x = x % y   Remainder Assignment Operator
**=	x **= y	  x = x ** y  Exponentiation Assignment Operator

Comparison Operators

>     Greater than
>=    Greater than or equal to
<     Less than
<=    Less than or equal to
===   Strict equallity operator
==    Loose equality operator
!==   Not equal to

Logical Operators

&&=	Logical AND assignment operator
||=	Logical OR assignment operator
??=     Nullish coalescing assignment operator 

Bitwise Operators

&=	Bitwise AND Assignment Operator 
^=	Bitwise OR Assignment Operator 
|=      Bitwise XOR Assignment Operator


2. For each JavaScript Operator, write 2 examples.

ARITHMETIC OPERATORS;

i. Addition

let x = 5;
let y = 2;
console.log(x + y);// return 7

let x = 5;
let y = 4;
let z = x + y;
console.log(z);// return 9

ii. Subtraction

let x = 5;
let y = 2;
console.log(x - y); // return 3

let x = 5;
let y = 8;
let z = x - y;
console.log(z);// return -3

iii. Multiplication

let x = 5;
let y = 2;
console.log(x * y);// return 10

let x = 0.5;
let y = -1.5;
let z = x * y;
console.log(z);// return -0.75

iv. Exponentiation

let x = 5;
let y = 2;
console.log(x ** y);// return 25

let x = 5;
let y = 4;
let z = x ** y;
console.log(z);// return 625

v. Division

let x = 5;
let y = 2;
console.log(x / y);// return 2.5

let x = 50;
let y = 100 ;
let z = x / y;
console.log(z);// return 0.5

Modulus (Remainder)

let x = 5;
let y = 2;
console.log(x % y);// return 1

let x = 5;
let y = 5;
let z = x % y;
console.log(z);// return 0

vi. Increment

let x = 5;
++x;
console.log(x);// return 6

let x = 5;
x++;
let z = x;
console.log(z);// return 6

vii. Decrement

let x = 5;
--x;
console.log(x);// return 5

let x = 5;
x--;
let z = x;
console.log(z);// return 5

ASSIGNMENT OPERATORS

i. Simple Assignment Operator 

let x = 5;
console.log(x);// return 5

let y = 5 + 2;
console.log(x);// return 7

ii. Addition Assignment Operator

let x = 10;
x += 5;
console.log(x);// return 15

let text = "Hi"; 
text += " there!";
console.log(text);// return Hi there!

iii. Subtraction Assignment Operator

let x = 10;
x -= 5;
console.log(x);// return 5

let x = 10;
let y = 3;
x -= y;
console.log(x);// return 7

iv. Multiplication Assignment Operator

let x = 10;
x *= 2;
console.log(x);// return 20

let x = 10;
let y = 3;
x *= y;
console.log(x);// return 30
 
v. Division Assignment Operator

let x = 10;
x /= 2;
console.log(x);// return 5

let x = 10;
let y = 5;
x /= y;
console.log(x);// return 2

vi. Remainder Assignment Operator

let x = 10;
x %= 2;
console.log(x);// return 0

let x = 12;
let y = 5;
x %= y;
console.log(x);// return 2

vii. Exponentiation Assignment Operator

let x = 10;
x **= 2;
console.log(x);// return 100

let x = 10;
let y = 2;
x **= y;
console.log(x);// return 100


COMPARISON OPERATORS

i. Greater than

let x = 10;
console.log(x > 0);// return true

let x = 10;
console.log(x > 15);// return false

ii. Greater than or equal to

let x = 10;
console.log(x >= 0);// return true

let x = 10;
console.log(x >= 15);// return false

iii. Less than

let x = 10;
console.log(x < 0);// return false

let x = 10;
console.log(x < 15);// return true

iv. Less than or equal to

let x = 10;
console.log(x <= 0);// return false

let x = 10;
console.log(x <= 15);// return true

v. Strict equallity operator

let x = 10;
console.log(x === 0);// return false

let x = 10;
let y = 10;
console.log(x === y);// return true

vi. Loose equality operator

let x = '10';
console.log(x == 10);// return true

let x = 10;
let y = '8';
console.log(x === y);// return false

vii. Not equal to

let x = 10;
console.log(x !== 0);// return true

let x = 10;
let y = 10;
console.log(x !== y);// return false


LOGICAL OPERATORS

i. Logical AND assignment operator

let firstname = true;
let secondName = true;
let accessGranted = firstname && secondName;
console.log(accessGranted) // true

let firstname = true;
let secondName = false;
let accessGranted = firstname && secondName;
console.log(accessGranted) // false

ii. Logical OR assignment operator

let firstname = true;
let secondName = true;
let accessGranted = firstname || secondName;
console.log(accessGranted) // true

let firstname = true;
let secondName = false;
let accessGranted = firstname || secondName;
console.log(accessGranted) // true

iii. Nullish coalescing assignment operator 

let firstname = false;
let secondName = false;
let accessGranted = firstname || secondName;
console.log('Identified', accessGranted) // false
let accessDenied = !accessGranted;
console.log('Access Denied', accessGranted) // false

let firstname = false;
let secondName = true;
let accessGranted = firstname || secondName;
console.log('Identified', accessGranted) // true
let accessDenied = !accessGranted;
console.log('Access Denied', accessGranted) // true

BITWISE OPERATORS

i. Bitwise AND Assignment Operator 

let x = 100;
x &= 5;
console.log(x);// return 4

let x = 100;
let y = 5;
x &= y;
console.log(x);// return 4

ii. Bitwise OR Assignment Operator

let x = 100;
x |= 5;
console.log(x);// return 101

let x = 100;
let y = 5;
x |= y;
console.log(x);// return 101

iii. Bitwise XOR Assignment Operator

let x = 100;
x ^= 5;
console.log(x);// return 97

let x = 100;
let y = 5;
x ^= y;
console.log(x);// return 97


3. What is the result when the following program is executed?

 for (let i = 1; i < 20; i +=7) {console.log (i);} // return 1 
                                                          8 
                                                          15
