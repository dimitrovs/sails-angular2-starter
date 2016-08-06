System.register("chat.service", ['@angular/core', './mock-chats'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, mock_chats_1;
    var ChatService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_chats_1_1) {
                mock_chats_1 = mock_chats_1_1;
            }],
        execute: function() {
            ChatService = (function () {
                function ChatService() {
                }
                ChatService.prototype.getChats = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_chats_1.CHATS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                ChatService = __decorate([
                    core_1.Injectable()
                ], ChatService);
                return ChatService;
            }());
            exports_1("ChatService", ChatService);
        }
    }
});
