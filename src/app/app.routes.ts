import { Routes } from '@angular/router';
import { Form1Component } from './formularios/form1/form1.component';
import { Form2Component } from './formularios/form2/form2.component';
import { Form3Component } from './formularios/form3/form3.component';
import { Form4Component } from './formularios/form4/form4.component';
import { Form5Component } from './formularios/form5/form5.component';

import { LayoutExternoComponent } from './layouts/layout-externo/layout-externo.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { ContactosComponent } from './publico/contactos/contactos.component';

import { LayoutInternoComponent } from './layouts/layout-interno/layout-interno.component';
import { PanelComponent } from './formularios/panel/panel.component';

import { DemoComponent } from './formularios/demo/demo.component';

export const routes: Routes = [
   
    
    {
        path:'form3',
        component: Form3Component
    }
    ,
    {
        path:'form4',
        component: Form4Component
    },
    {
        path:'form5',
        component: Form5Component
    }
    ,
    {
        path:'demo',
        component: DemoComponent
    }
    ,
    {
        path:'',
        component:LayoutInternoComponent,
        children:[
            {
                path:'panel',
                component:PanelComponent
            },
            {
                path:'form1',
                component: Form1Component
            },
            {
                path:'form2',
                component: Form2Component
            },
            {
                path:'',
                redirectTo:'panel',
                pathMatch:"full"
            }
        ]
    }
    ,

    {
        path:"",
        component: LayoutExternoComponent,
        children:[
            {
                path:'inicio',
                component:InicioComponent
            },
            {
                path:'contactos',
                component:ContactosComponent
            }
            // {
            //     path:"",
            //     redirectTo:'inicio',
            //     pathMatch:"full"
            // }
        ]
    }

    
    
   

];
