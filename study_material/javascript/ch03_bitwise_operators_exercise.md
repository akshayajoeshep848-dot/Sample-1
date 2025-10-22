### JS Practice Questions on Bitwise Operators

### **Bitwise AND (`&`)**

1.  What is the output of `9 & 7`?
2.  What is the output of `15 & 8`?
3.  What is the output of `1 & 1`?
4.  What is the output of `12 & 3`?
5.  What is the output of `0xF0 & 0x0F`?
6.  How can you use `&` to check if the 5th bit of a number is set?
7.  What is the output of `255 & 128`?
8.  What is the output of `(1 << 3) & 12`?
9.  What is the output of `100 & 99`?
10. What is the output of `0b1101 & 0b1011`?

---

### **Bitwise OR (`|`)**

11. What is the output of `9 | 7`?
12. What is the output of `15 | 8`?
13. What is the output of `12 | 3`?
14. What is the output of `1 | 0`?
15. What is the output of `0xF0 | 0x0F`?
16. How can you use `|` to set the 3rd bit of a number?
17. What is the output of `255 | 128`?
18. What is the output of `(1 << 2) | 1`?
19. What is the output of `10 | 20`?
20. What is the output of `0b1101 | 0b1011`?

---

### **Bitwise XOR (`^`)**

21. What is the output of `9 ^ 7`?
22. What is the output of `15 ^ 8`?
23. What is the output of `12 ^ 3`?
24. What is the output of `1 ^ 1`?
25. What is the output of `0xF0 ^ 0x0F`?
26. What is a common use case for the `^` operator?
27. What is the output of `255 ^ 255`?
28. What is the output of `(1 << 4) ^ 15`?
29. What is the output of `10 ^ 10`?
30. What is the output of `0b1101 ^ 0b1011`?

---

### **Bitwise NOT (`~`)**

31. What is the output of `~5`?
32. What is the output of `~0`?
33. What is the output of `~-1`?
34. What is the output of `~-10`?
35. What is the output of `~15`?
36. What is the relationship between `~x` and `-(x + 1)`?
37. What is the output of `~'5'`?
38. What is the output of `~255`?
39. What is the output of `~-0`?
40. What is the output of `~(-128)`?

---

### **Left Shift (`<<`)**

41. What is the output of `5 << 3`?
42. What is the output of `1 << 8`?
43. What is the output of `10 << 1`?
44. What is the output of `255 << 2`?
45. What is the output of `7 << 4`?
46. What does `x << n` roughly equate to in a mathematical sense?
47. What is the output of `1 << 31`?
48. What is the output of `-5 << 1`?
49. What is the output of `0 << 10`?
50. What is the output of `1000 << 2`?

---

### **Signed Right Shift (`>>`)**

51. What is the output of `20 >> 2`?
52. What is the output of `16 >> 4`?
53. What is the output of `10 >> 1`?
54. What is the output of `128 >> 7`?
55. What is the output of `-16 >> 2`?
56. What does `x >> n` roughly equate to in a mathematical sense?
57. What is the output of `-1 >> 1`?
58. What is the output of `1024 >> 10`?
59. What is the output of `255 >> 8`?
60. What is the output of `0 >> 5`?

---

### **Unsigned Right Shift (`>>>`)**

61. What is the output of `20 >>> 2`?
62. What is the output of `16 >>> 4`?
63. What is the output of `10 >>> 1`?
64. What is the output of `128 >>> 7`?
65. What is the output of `-16 >>> 2`?
66. What is the main difference between `>>` and `>>>` with negative numbers?
67. What is the output of `-1 >>> 1`?
68. What is the output of `-2 >>> 1`?
69. What is the output of `-10 >>> 2`?
70. What is the output of `-255 >>> 8`?

---

### **Answers**

1.  `1`
2.  `8`
3.  `1`
4.  `0`
5.  `0`
6.  `number & (1 << 4)`
7.  `128`
8.  `8`
9.  `96`
10. `9`
11. `15`
12. `15`
13. `15`
14. `1`
15. `255`
16. `number | (1 << 2)`
17. `255`
18. `5`
19. `30`
20. `13`
21. `14`
22. `7`
23. `15`
24. `0`
25. `255`
26. Swapping two variables without a temporary variable
27. `0`
28. `31`
29. `0`
30. `6`
31. `-6`
32. `-1`
33. `0`
34. `9`
35. `-16`
36. They are the same.
37. `-6`
38. `-256`
39. `-1`
40. `127`
41. `40`
42. `256`
43. `20`
44. `1020`
45. `112`
46. Multiplying the number by $2^n$
47. `-2147483648`
48. `-10`
49. `0`
50. `4000`
51. `5`
52. `1`
53. `5`
54. `1`
55. `-4`
56. Integer division of the number by $2^n$
57. `-1`
58. `1`
59. `0`
60. `0`
61. `5`
62. `1`
63. `5`
64. `1`
65. `1073741820`
66. `>>` preserves the sign bit, while `>>>` fills with zeros.
67. `2147483647`
68. `2147483647`
69. `1073741821`
70. `16777215`
