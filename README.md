In `app.js` there's a reset function :

```JavaScript
const reset = () => {
    window.location.reload();
}
```


## How does this function works?


- `window.location.reload()` method is used to reload the current page.

- Optional parameters of `true` or `false` can be passed into the method.

- `window.location.reload(true)`
  Reloads the page from the server. 
  
  This fetches the data from the server side.

- `window.location.reload(fasle)`
  Reloads the page using the cache by the client side.
  
  `False` is the default parameter for this method; so, it can be left blank.
