# javascript Questions on Operators

## comparison & logical operators

### Questions

---

1. What's the output of `5 == '5'`?
2. What's the output of `5 === '5'`?
3. What's the output of `null == undefined`?
4. What's the output of `null === undefined`?
5. What's the output of `'abc' > 'ab'`?
6. What's the output of `'2' > '12'`?
7. What's the output of `'' == false`?
8. What's the output of `' ' == false`?
9. What's the output of `!true`?
10. What's the output of `!false`?
11. What's the output of `!!'hello'`?
12. What's the output of `!!''`?
13. What's the output of `true && false`?
14. What's the output of `true || false`?
15. What's the output of `5 > 3 && 2 < 4`?
16. What's the output of `5 > 3 || 2 > 4`?
17. What's the output of `'cat' === 'Cat'`?
18. What's the output of `(5 > 3) ? 'yes' : 'no'`?
19. What's the output of `5 > 10 ? 'yes' : 'no'`?
20. What's the output of `2 + 2 == 4 && 5 + 5 == 10`?
21. What's the output of `2 + 2 == 5 || 5 + 5 == 10`?
22. What's the output of `5 != '5'`?
23. What's the output of `5 !== '5'`?
24. What's the output of `'a' < 'A'`?
25. What's the output of `NaN == NaN`?
26. What's the output of `'' || 'hello'`?
27. What's the output of `'hello' || ''`?
28. What's the output of `'hello' && 'world'`?
29. What's the output of `'' && 'world'`?
30. What's the output of `null || 'default value'`?

---

### **Answers**

1. `true` (Loose equality)
2. `false` (Strict equality)
3. `true` (Loose equality)
4. `false` (Strict equality)
5. `true`
6. `false` (Lexicographical comparison)
7. `true`
8. `false`
9. `false`
10. `true`
11. `true`
12. `false`
13. `false`
14. `true`
15. `true`
16. `true`
17. `false`
18. `'yes'`
19. `'no'`
20. `true`
21. `true`
22. `false`
23. `true`
24. `false` (Uppercase letters have a lower Unicode value)
25. `false`
26. `'hello'` (Short-circuiting)
27. `'hello'` (Short-circuiting)
28. `'world'` (Short-circuiting)
29. `''` (Short-circuiting)
30. `'default value'` (Short-circuiting)
