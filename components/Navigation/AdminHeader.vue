<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div>
        <nuxt-link 
          to="/@handpicks" 
          class="a-header__logo">
          handpicks
        </nuxt-link>
        <span>editor</span>
      </div>
    </el-col>
    <el-col :span="16">
      <ul class="a-header__menu">
        <li class="a-header__menu__item a-header__menu__item--default">
          <nuxt-link to="#">Home</nuxt-link>
        </li>
        <li class="a-header__menu__item a-header__menu__item--active">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              Dropdown List<i class="el-icon-arrow-down el-icon--right"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    
  }
</script>

<style>
.a-header {
  padding: 6px 32px;
  -webkit-box-shadow: 0px 2px 10px 2px rgba(221, 221, 221, 0.5);
  -moz-box-shadow: 0px 2px 10px 2px rgba(221, 221, 221, 0.5);
  box-shadow: 0px 2px 10px 2px rgba(221, 221, 221, 0.5);
}
.a-header__logo {
  color: #000001;
  text-decoration: none;
  font-size: 2.8rem;
  line-height: 1;
  font-family: 'Mosk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.a-header__menu {
  float: right;
  list-style: none;
  margin-top: 15px;
}
.a-header__menu__item {
  display: inline;
  margin: 0 20px;
  font-weight: 500;
}
.a-header__menu__item a {
  text-decoration: none;
  font-weight: 500;
}
.a-header__menu__item--default {
  color: #656565;
}
.a-header__menu__item--default a {
  color: #656565;
}
.a-header__menu__item--active {
  color: #080808;
}
.a-header__menu__item--active a {
  color: #080808;
}

</style>
