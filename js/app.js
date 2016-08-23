/**
 * Created by hxsd on 2016/8/4.
 */
var myapp=angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    //词典
    $stateProvider.state("tabs.dictionary",{
        url:"/dictionary",
        views:{"tab-dictionary":{
            templateUrl:"views/dictionary/dictionary.html"
           //controller:"myCtrl"
        }}

    });
    //百科
    $stateProvider.state("tabs.encyclopedia",{
        url:"/encyclopedia",
        views:{"tab-encyclopedia":{templateUrl:"views/encyclopedia/encyclopedia.html"}}
    });
    //翻译
    $stateProvider.state("tabs.translation",{
        url:"/translation",
        views:{"tab-translation":{templateUrl:"views/translation/translation.html"}}
    });
    //发现
    $stateProvider.state("tabs.found",{
        url:"/found",
        views:{"tab-found":{templateUrl:"views/found/found.html"}}
    });
    //我的
    $stateProvider.state("tabs.my",{
        url:"/my",
        views:{"tab-my":{templateUrl:"views/my/my.html"}}
    });

    $urlRouterProvider.otherwise("/tabs/dictionary")
});