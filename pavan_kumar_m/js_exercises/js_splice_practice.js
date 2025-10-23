//  Remove the number 3 from the array [1, 2, 3, 4, 5].
      let arr = [1, 2, 3, 4, 5];
      // arr.splice(2,1)
      arr.splice(-3, 1);
      console.log(arr);

      // Add the number 6 between 5 and 7 in the array [1, 2, 3, 4, 5, 7, 8].
      let arr1 = [1, 2, 3, 4, 5, 7, 8];
      arr1.splice(5, 0, 6);
      console.log(arr1);

      // Replace 4 with 40 in the array [1, 2, 3, 4, 5].
      let arr2 = [1, 2, 3, 4, 5];
      arr2.splice(3, 1, 40);
      console.log(arr2);

      //  Remove 30 and 40 from the array [10, 20, 30, 40, 50].
      let arr3 = [10, 20, 30, 40, 50];
      arr3.splice(2, 2);
      console.log(arr3);

      // Add a and b at the beginning of the array [c, d, e].
      let arr4 = ["c", "d", "e"];
      arr4.splice(0, 0, "a", "b");
      console.log(arr4);

      //  Replace banana and orange with grape and kiwi in the array ['apple', 'banana', 'orange', 'pear'].
      let arr5 = ["apple", "banana", "orange", "pear"];
      arr5.splice(1, 2, "grape", "kiwi");
      console.log(arr5);

      //  Remove the last element from the array ['one', 'two', 'three'].
      let arr6 = ["one", "two", "three"];
      arr6.splice(-1, 1);
      console.log(arr6);

      //   Add d at the end of the array ['a', 'b', 'c'] without using push().
      let arr7 = ["a", "b", "c"];
      arr7.splice(arr7.length, 0, "d", "e");
      console.log(arr7);


    //   Remove all elements from index 2 to the end of the array [1, 2, 3, 4, 5].

    
