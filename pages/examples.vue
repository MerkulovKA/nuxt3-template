<template>
    <section class="container mx-auto grid gap-y-2 px-3 lg:px-0">
        <PageTitle>
            {{ t('pages.examples.title') }}
        </PageTitle>
        <p>{{ t('pages.examples.description') }}</p>
        <PageArticle class="mb-4 rounded border p-6 lg:p-8">
            <header class="mb-2">
                <PageSubtitle>
                    {{ t('pages.examples.counter.title') }}
                </PageSubtitle>
            </header>
            <main>
                <div class="mb-2">
                    {{ t('pages.examples.counter.title') }}:
                    {{ counterStore.count }}
                </div>
                <div class="flex flex-wrap gap-5">
                    <UiBtn @click="counterStore.increment">
                        {{ t('pages.examples.counter.button.increment') }}
                    </UiBtn>
                    <UiBtn @click="counterStore.increment2x">
                        {{ t('pages.examples.counter.button.increment') }} 2x
                    </UiBtn>
                    <UiBtn
                        variant="error"
                        @click="counterStore.decrement">
                        {{ t('pages.examples.counter.button.decrement') }}
                    </UiBtn>
                    <UiBtn
                        variant="success"
                        @click="counterStore.reset">
                        {{ t('pages.examples.counter.button.reset') }}
                    </UiBtn>
                </div>
            </main>
        </PageArticle>
        <PageArticle class="">
            <header class="mb-2">
                <PageSubtitle>
                    {{ t('pages.examples.todo.title') }}
                </PageSubtitle>
            </header>
            <main>
                <div>
                    <form
                        @submit.prevent="addTodo"
                        class="mb-8 flex">
                        <UiInput
                            v-model="todo"
                            :placeholder="
                                t('pages.examples.todo.placeholder')
                            " />
                        <UiBtn
                            type="submit"
                            class="rounded-l-none">
                            {{ t('pages.examples.todo.button.add') }}
                        </UiBtn>
                    </form>
                    <UiBtnGroup>
                        <UiBtn
                            size="sm"
                            @click="todoStore.saveToLocalStorage">
                            {{ t('pages.examples.todo.button.save') }}
                        </UiBtn>
                        <UiBtn
                            size="sm"
                            @click="todoStore.clearLocalStorage">
                            {{ t('pages.examples.todo.button.clear') }}
                        </UiBtn>
                        <UiBtn
                            size="sm"
                            :disabled="!todoStore.isLoad"
                            @click="todoStore.loadFromLocalStorage">
                            {{ t('pages.examples.todo.button.load') }}
                        </UiBtn>
                    </UiBtnGroup>
                    <TransitionGroup
                        v-if="todoStore.todos.length > 0"
                        name="list"
                        tag="section"
                        class="flex flex-col-reverse">
                        <PageArticle
                            class="flex items-end after:block"
                            v-for="(todo, index) in todoStore.todos"
                            :key="todo.id">
                            <span class="mr-4"> {{ index + 1 }}. </span>
                            <span
                                class="relative flex items-center text-xl text-slate-900 before:absolute before:left-0 before:block before:h-0.5 before:w-0 before:bg-rose-500 before:transition-[width] before:duration-300 dark:text-white"
                                :class="{ 'before:w-full': todo.completed }">
                                {{ todo.text }}
                            </span>
                            <span class="ml-auto">
                                <UiCheckbox v-model="todo.completed" />
                            </span>
                        </PageArticle>
                    </TransitionGroup>
                    <div v-else>В вашем списке задач пусто</div>
                </div>
            </main>
        </PageArticle>
    </section>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counterStore'
import { useTodoStore } from '~/stores/todoStore'

const { t } = useLang()
const counterStore = useCounterStore()
const todoStore = useTodoStore()
useHead({
    title: t('pages.examples.title'),
})
onMounted(() => {
    todoStore.checkInLocalStorage()
})
const todo = ref('')
function addTodo() {
    todoStore.addTodo({ text: todo.value, completed: false })
    todo.value = null
}
</script>

<style scoped></style>
