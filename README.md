# presentation-controller

Augmented.js Presentation Controller Module

# Deprecation

As of Augmented Next 3.x, this package is deprecated.

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ViewController](#viewcontroller)
    -   [Parameters](#parameters)
    -   [initialize](#initialize)
        -   [Parameters](#parameters-1)
    -   [initialize](#initialize-1)
        -   [Parameters](#parameters-2)
    -   [render](#render)
    -   [remove](#remove)
    -   [manageView](#manageview)
        -   [Parameters](#parameters-3)
    -   [removeAllViews](#removeallviews)
    -   [views](#views)
    -   [addPermission](#addpermission)
        -   [Parameters](#parameters-4)
    -   [removePermission](#removepermission)
        -   [Parameters](#parameters-5)
    -   [permissions](#permissions)
        -   [Parameters](#parameters-6)
    -   [permissions](#permissions-1)
    -   [clearPermissions](#clearpermissions)
    -   [matchesPermission](#matchespermission)
        -   [Parameters](#parameters-7)
    -   [canDisplay](#candisplay)
-   [ManagedController](#managedcontroller)
    -   [Parameters](#parameters-8)

## ViewController

**Extends Object**

A controller to handle a group of views.  The api is handled simular to views for use in a router.

### Parameters

-   `options`  

**Meta**

-   **deprecated**: This is deprecated.


### initialize

Permissions in the controller

#### Parameters

-   `options`  

### initialize

initialize - an API for the start of the controller.  It is intended to add initializers here

#### Parameters

-   `options`  

### render

render - an API for the render of the controller.  It is intended to add view render methods here

### remove

remove - an API for the end of the controller.  It is intended to add view removal and cleanup here

### manageView

manageView - manage a view

#### Parameters

-   `view` **Presentation.View** An instance of a view to manage

### removeAllViews

removeAllViews - cleans up all views known (calling thier remove method)

### views

getViews - get the instances of the views known

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** Returns an array of view instances

### addPermission

Adds a permission to the controller

#### Parameters

-   `permission` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The permission to add
-   `negative` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Flag to set a nagative permission (optional)

### removePermission

Removes a permission to the controller

#### Parameters

-   `permission` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The permission to remove
-   `negative` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Flag to set a nagative permission (optional)

### permissions

Sets the permissions to the controller

#### Parameters

-   `permissions` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The permissions to set

### permissions

Gets the permissions to the controller<br/>
Return format:<br/>

<pre>{
    include: [],
    exclude: []
}</pre>

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The permissions in the controller

### clearPermissions

Clears the permissions in the controller

### matchesPermission

Matches a permission in the controller

#### Parameters

-   `match` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The permissions to match
-   `negative` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Flag to set a nagative permission (optional)

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns true if the match exists

### canDisplay

Callback to return if this controller can display

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Returns true if this controller can display

## ManagedController

**Extends ViewController**

A managed controller that automatically sets up the components
Data can be passed to every view by passing using 'options'

### Parameters

-   `options` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options to pass to all views managed

**Meta**

-   **deprecated**: This is deprecated.

