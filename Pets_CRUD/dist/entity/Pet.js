"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
var typeorm_1 = require("typeorm");
var Pet = /** @class */ (function () {
    function Pet() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Number)
    ], Pet.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pet.prototype, "namePet", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pet.prototype, "nameOwner", void 0);
    __decorate([
        typeorm_1.Column({ type: "date" }),
        __metadata("design:type", Date)
    ], Pet.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column({ type: "time" }),
        __metadata("design:type", Date)
    ], Pet.prototype, "time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pet.prototype, "symptoms", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP(6)"; } }),
        __metadata("design:type", Date)
    ], Pet.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ type: "timestamp", default: function () { return "CURRENT_TIMESTAMP(6)"; }, onUpdate: "CURRENT_TIMESTAMP(6)" }),
        __metadata("design:type", Date)
    ], Pet.prototype, "updatedAt", void 0);
    Pet = __decorate([
        typeorm_1.Entity()
    ], Pet);
    return Pet;
}());
exports.Pet = Pet;
