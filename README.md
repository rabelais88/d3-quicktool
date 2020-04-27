# d3-quicktool

d3 utility functions for faster development

```javascript
import { trans } from 'd3-quicktool';

const node = d3.select('mynode')

node.attr('transform', trans(x, y, scale));
node.attr(...ttrans(x, y ,scale));
```
