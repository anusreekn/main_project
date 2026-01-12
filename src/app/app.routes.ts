import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Component } from '@angular/core';
import { Contact } from './pages/contact/contact';
import { ProductDetail } from './pages/product-details/product-details';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';

export const routes: Routes = [
       {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
      {
        path: 'products',
        component: Products
    },
      {
        path: 'about',
        component: About
    },

      {
        path: 'product/:id',
        component: ProductDetail
    }

];
