"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ 'games': 'games' });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.json({ text: `the game has been created!` });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                res.json({ text: `the game with id ${id} has been updated!` });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params.id;
                res.json({ text: `the game with id ${id} has been deleted! ` });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getGameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json('list');
                // const { id } = req.params;
                // if(games.length > 0){
                //     return res.json(games[0]);
                // }else{
                //     res.status(404).json({text: "the game doesn't exists"});
                // }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.gamesController = new GamesController();
