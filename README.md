# odin-calculator

A calculator written in vanilla Javascript, for the fulfillment of another Odin Project. While this might not have needed it, I took the opportunity to create the calculator as a class, in order to get some practice with that -- most notably with constructors and this's.

TODOS:
1. Make keypresses activate the keys on the screen (i.e., toggle a class that shows which key you pressed).
2. Add more functions -- powers, roots, logarithms, factorials, permutations, combinations, as well as stored constants (especially e and pi).
3. Formatting using toLocaleString()
4. Precision: I'm currently setting a maximum precision of 12 digits using toPrecision(), which causes a few problems, especially as regards rounding. I know calculators normally store something like 15 digits of precision, especially for stored constants, to account for the rounding errors. Since I'm using the onscreen values as the computed ones, at the moment I can't do that. I'd have to refactor the whole thing to use one set of values and display another set.
5. Possibly some more stylish styling...