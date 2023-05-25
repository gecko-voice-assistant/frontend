<!--
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
-->
<script>
export default {
    name: "NavbarItem",
    props: ["name", "page"]
};
</script>

<template>
    <RouterLink :to="{ name: name }" class="w-48 p-1.5 rounded-xl text-xl text-center">
        {{ $t("navigation." + name.toLowerCase()) }}
    </RouterLink>
</template>

<style scoped></style>
