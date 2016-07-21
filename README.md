# Onesie Toggle Block View

React Reuseable Component that allows toggling between a given thumbnail view and a detail view.

## Installation
`npm i --save onesie-toggle-environment-block`

## Usage

### Add to Project
####ES5
```javascript
var ClusterToggleView = require('onesie-toggle-environment-block').default;
```
####ES6
```javascript
import ClusterToggleView from 'onesie-toggle-environment-block';
```

### Passing Views as Children
```javascript
<ClusterToggleView>
  //First Child is the Thumbnail View
  <div>
    Thumbnail View
  </div>
  //Second Child is the Detail View
  <div>
    Detail View
  </div>
</ClusterToggleView>
```

### Passing Views a Prop
```javascript
var thumb = <div>Thumb View</div>;
var expanded = <div>Detail View</div>;
<ClusterToggleView 
          thumbElement={thumb}
          detailElement={expanded}/>
```

## Component Styling

TO DO: Add Styling Documentation

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

**[Juan Carlos Garzon](https://github.com/juangrt)**<br>
Author

**[Oakley Hall](https://github.com/ohall)**<br>
Project Lead, Code Review

**[Yuan Shen](https://github.com/yshen01)**<br>
Code Review

