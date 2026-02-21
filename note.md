[FreeCodeCamp](https://youtu.be/xV7S8BhIeBo?si=LRrJ315y8zQfSCWz)
Javascript Part starts @ 24 minutes

Most Confusing part of this project for me is introducing of

```
<div class="control active-btn" data-id="home">
<i class="fa-solid fa-house"></i>
</div>
```

data-id="" custom attribute.
To see in Console

```
    const controls = document.querySelectorAll('.control');
    controls[0]; // First element
    controls[1]; // Second element
    controls[4]; // Fifth element
```

```
document.querySelectorAll('.control')[0].getAttribute('data-id');
// or
document.querySelectorAll('.control')[0].dataset.id;
```

### To see All Id

```
const controls = document.querySelectorAll('.control');

controls.forEach(control => {
  console.log(control.getAttribute('data-id'));
});
```

**_Using dataset_**

```
const controls = document.querySelectorAll('.control');

controls.forEach(control => {
  console.log(control.dataset.id);
});
```

**Display Them all at once:**

```
const controls = document.querySelectorAll('.control');

[...controls].map(control => control.dataset.id);
// Then log it
console.log([...controls].map(control => control.dataset.id));
```
