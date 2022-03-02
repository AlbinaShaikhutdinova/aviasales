<template>
  <div @click="(e) => onClick(e)" class="dropdown-menu-wrapper menu__toggle">
    <span class="menu-title">{{ title }}<span :class="caret"></span></span>
    <ul :class="state" class="dropdown-menu">
      <li class="menu__item">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DropDownMenu',
  props: ['title'],
  data() {
    return {
      state: 'closed',
      caret: 'down-caret',
    };
  },
  mounted: function () {
    window.addEventListener('click', (e) => this.closeMenu(e));
  },
  beforeUnmount: function () {
    window.removeEventListener('click', (e) => this.closeMenu(e));
  },
  methods: {
    closeMenu(e) {
      if (!(e.target.closest('.dropdown-menu') || e.target.closest('.menu__toggle'))) {
        this.state = 'closed';
        this.caret = 'down-caret';
      }
    },
    onClick(e) {
      if (!e.target.closest('.dropdown-menu') && e.target.closest('.menu__toggle')) {
        this.state = this.state === 'closed' ? 'open' : 'closed';
        this.caret = this.caret === 'down-caret' ? 'down-caret open-caret' : 'down-caret';
      }
    },
  },
};
</script>

<style lang="scss">
.dropdown-menu-wrapper {
  height: 100%;
  min-width: 15rem;
  position: relative;
  background-color: white;
  color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    padding: 1rem 2rem;
  }
  li {
    margin: 0;
    padding: 0;
  }
  .menu-title {
    font-size: 1.5rem;
  }
  .dropdown-menu {
    position: absolute;
    background-color: white;
    right: 0;
    top: 6rem;
    display: none;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
  }
  .open.dropdown-menu {
    display: block;
  }
  .down-caret {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #696767 transparent transparent transparent;
    display: inline-block;
    margin-left: 6px;
    top: 0;
    position: relative;
    transform: rotate(0deg);
    transition: all 0.25s ease-in;
  }

  .open-caret {
    transform: rotate(180deg);
    transition: all 0.25s ease-out;
  }
}
</style>
