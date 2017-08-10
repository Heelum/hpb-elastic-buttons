# HPB Elastic Buttons - Svg Elastic buttons

[![N|Solid](https://s3.amazonaws.com/heelum.com/assets/img/elasticBtnWeb.gif)](https://nodesource.com/products/nsolid)


# Requirements
Animations requiere Snap.svg
```sh
<script src="//cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>   
```


### Installation

```sh
$ npm install hpb-elastic-buttons --save
```

### Usage

Import in your module

```sh
import { ButtonComponent } from 'hpb-elastic-buttons/elastic-button/button.component';
import { ButtonLongComponent } from 'hpb-elastic-buttons/elastic-button-long/button.long.component';

@NgModule({
    declarations: [
        ...
        ButtonComponent,
        ButtonLongComponent,
        ...
    ],
    ...
})
```

Use as a directive

```sh
<elastic-button [btnText]="'Button'" [mainColor]="' #333444 '" (click)=" anyFunction() "></elastic-button>
```

or

```sh
<elastic-button [btnText]="varName" [mainColor]="' #333444 '" (click)=" anyFunction() "></elastic-button>
```

in your component

```sh
varName: string = 'Button';
```

Example with Ionicons*

```sh
varName: string = '<i class="icon ion-ios-checkmark-outline></i>"';
```
*requires 

```sh
<link rel="stylesheet" type="text/css" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
```


### Inputs


| Input | Default |  Type | Required |
| ------ | ------ | ------ | ------ |
| mainColor | #6AB7FC | string | no |
| btnText | - | string | yes |

#### Credits

This is an angular adaptation of codrops "Elastic elements" you can find it [here](https://tympanus.net/codrops/2014/12/15/elastic-svg-elements/)

License
----

MIT
