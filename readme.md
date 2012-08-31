[![Build Status](https://secure.travis-ci.org/ChrisJones0099/Functional-Datatypes-js.png)](http://travis-ci.org/ChrisJones0099/Functional-Datatypes-js)

Functional Datatypes
====================

Overview
--------

Datatypes inspired by Haskell implemented in Javavscript

Maybe
-----

The Maybe type encapsulates an optional value. A value of type Maybe a either contains a value of type a (represented as Just a), or it is empty (represented as Nothing). Using Maybe is a good way to deal with errors or exceptional cases without resorting to drastic measures such as error.

The Maybe type is also a monad. It is a simple kind of error monad, where all errors are represented by Nothing. A richer error monad can be built using the Either type.
