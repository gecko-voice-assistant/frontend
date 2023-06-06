/*
This file is part of G.E.C.K.O.
Copyright (C) 2023  Finn Wehn

G.E.C.K.O. is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import { createI18n } from "vue-i18n";
import de_DE from "@/i18n/translations/de_DE.json";
import en_US from "@/i18n/translations/en_US.json";

export const defaultLocale = "de_DE";

export const supportedLocales = {
    de_DE: { name: "Deutsch" },
    en_US: { name: "English" }
};

const messages = {
    de_DE: de_DE,
    en_US: en_US
};

let _i18n;

function setup(options = { locale: defaultLocale }) {
    _i18n = createI18n({
        locale: options.locale,
        fallbackLocale: defaultLocale,
        messages
    });
    setLocale(options.locale);
    return _i18n;
}

// Sets the active locale
function setLocale(newLocale) {
    _i18n.global.locale = newLocale;
}

// Public interface
export default {
    get vueI18n() {
        return _i18n;
    },
    setup,
    setLocale
};
