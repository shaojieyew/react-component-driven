```jsx
<Flex flexDirection="column">
  <Box p={3} bg="grey.3">
    Row 1
  </Box>
  <Box p={3} bg="grey.4">
    Row 2
  </Box>
  <Box p={3} bg="grey.5">
    Row 3
  </Box>
</Flex>
```

```jsx
<Flex flexDirection="row">
  <Flex alignItems="center" p={3} flex={1} bg="grey.3">
    Row 1
  </Flex>
  <Box>
    <Box p={3} bg="grey.4">
      Row 2
    </Box>
    <Box p={3} bg="grey.5">
      Row 3
    </Box>
  </Box>
</Flex>
```
