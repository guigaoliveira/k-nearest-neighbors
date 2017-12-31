# K Nearest Neighbors

This is a simple implementation of the [K Nearest Neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) (KNN) algorithm in Javascript.
The algorithm allows you to classify things from numeric data with "characteristics" that define groups. Example: Given the weight and height a person can be classified into groups as above or below ideal weight.

## API
### **classify(unknown, dataset, options)**
This is the function used to classify something unknown from a data set. The first parameter is the you want to discover the group, the second parameter is the data set, the third are the options. 

Example:
```javascript
const { classify } = require(".");
console.log(
  classify(
    {
      data: [0, 1]
    },
    [
      {
        data: [2, 0],
        group: "group1"
      },
      {
        data: [1, 0],
        group: "group2"
      }
    ],
    {
      k: 3,
      distance: "euclidean"
    }
  )
);
```
Description of function parameters: 

#### unknown
Type: Object. 
Attributes:
* **data**
Array of data representing the "characteristics" of a group. Type: Array.
#### dataset 
Type: Object. 
Attributes:
* **data**
Array of data representing the "characteristics" of a group. Type: Array.
* **group** 
The group name. Type: String.
#### options
Type: Object. 
Attributes:
* **k**
An integer value for the number of neighbors nearby. The default is the square root of the size of the data set. Type: Number.
* **distance** 
Distance metric that can be: "euclidean". The default is "euclidean". Type: String.

## License

MIT License

Copyright (c) 2017 Guilherme Matheus Borges de Oliveira

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
