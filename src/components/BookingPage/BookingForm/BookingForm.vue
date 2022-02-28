<template>
  <div class="form-wrapper">
    <div class="form">
      <label>Имя<input type="text" v-model="userData.name" /></label>
      <label>Фамилия<input type="text" v-model="userData.last_name" /></label>
      <label>Отчество<input type="text" v-model="userData.patronymic" /></label>
      <label>Номер паспорта<input type="text" v-model="userData.passport_id" /></label>
      <label>Пол<input type="text" v-model="userData.gender" /></label>
      <label>Гражданство<input type="text" v-model="userData.citizenship" /></label>
    </div>
  </div>
  <button @click="addPassenger" class="button">Подтвердить</button>
</template>

<script>
export default {
  name: 'BookingForm',
  props: ['ticketId'],
  emits: ['addNewPassenger'],
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
<style scoped>
.form-wrapper {
  padding: 1rem 2rem;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 1rem;
}
</style>
