```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count);
  }, [count]); // <-- Only re-run effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This will only update once to 2. React optimizes and drops subsequent setState if they happen too quickly
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```