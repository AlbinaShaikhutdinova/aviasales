<template>
  <div class="form-wrapper">
    <div class="form">
      <label>Имя<input type="text" placeholder="Иван" v-model="userData.name" /></label>
      <label>Фамилия<input placeholder="Иванов" type="text" v-model="userData.last_name" /></label>
      <label>Отчество<input placeholder="Иванович" type="text" v-model="userData.patronymic" /></label>
      <label>Номер паспорта<input placeholder="0123456789" type="text" v-model="userData.passport_id" /></label>
      <label>Пол<input type="text" v-model="userData.gender" /></label>
      <label>Гражданство<input type="text" v-model="userData.citizenship" /></label>
    </div>
  </div>
  <StandardButton :className="'secondary-button'" :title="'Подтвердить'" @click="addPassenger" />
</template>

<script>
import StandardButton from '../../../common/UI/button.vue';
export default {
  name: 'BookingForm',
  props: ['ticketId'],
  emits: ['addNewPassenger'],
  components: { StandardButton },
  data() {
    return {
      userData: {
        name: '',
        last_name: '',
        patronymic: '',
        passport_id: '',
        gender: '',
        citizenship: '',
      },
    };
  },
  methods: {
    addPassenger() {
      this.$emit('addNewPassenger', { passenger: this.userData, ticket: this.ticketId.id });
    },
  },
};
</script>
<style scoped lang="scss">
.form-wrapper {
  padding-bottom: 1rem;
}
.form {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  label {
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
  }
  input {
    margin-top: 0.8rem;
    font-size: 1.3rem;
    padding: 0.7rem 1rem;
  }
}
</style>
