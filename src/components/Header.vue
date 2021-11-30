<template>
  <LayoutHeader id="app-header">
    <Logo />
    <Button title="Save current config" onClick='onClickHandler' />
  </LayoutHeader>
</template>

<script>
import { LayoutHeader } from 'ant-design-vue';
import Logo from '../assets/Logo.svg?inline';
import Button from './Button';

export default {
  name: 'Header',
  components: {
    Logo,
    Button,
    LayoutHeader
  },
  methods: {
    onClickHandler() {
      // eslint-disable-next-line no-console
      console.log('header');
      /* setConfig({
        variables: { config },
      })
        .then(() => notification.success({ message: 'Configuration Saved' }))
        .catch((err: ApolloError) => {
          notification.error({
            message: 'Enable to save current configuration',
            description: err,
          });
        }); */
    },
  },
};
</script>

<style scoped>
#app-header {
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}
</style>
