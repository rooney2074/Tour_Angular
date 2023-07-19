import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { ExploreComponent } from './explore/explore.component';
import { FavComponent } from './fav/fav.component';
import { HolidayComponent } from './holiday/holiday.component';
import { HotelComponent } from './hotel/hotel.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PurposeComponent } from './purpose/purpose.component';
import { RegisterComponent } from './register/register.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [{
  path:'',component:IndexComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'register',component:RegisterComponent
},
{
  path:'explore',component:ExploreComponent
},
{
  path:'fav',component:FavComponent
},
{
  path:'show',component:ShowComponent
},
{
  path:'hotel',component:HotelComponent
},
{
  path:'holiday',component:HolidayComponent
},
{
  path:'business',component:BusinessComponent
},
{
  path:'purpose',component:PurposeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
