<template>
    <div class="flex flex-col lg:flex-row py-24 justify-between lg:gap-[10.5rem] gap-11 px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
        <h1 class="font-wide font-medium text-txt text-4xl leading-none uppercase w-[16.5rem]">Заявка на участие</h1>

        <form class="flex flex-col gap-[4.5rem] grow">
            <div>
                <h2 class="font-compact font-medium text-txt text-2xl leading-7 mb-4">Контактная информация</h2>
                <div class="grid grid-cols md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-7">
                    <div>
                        <label for="name" class="block mb-1 text-sm font-normal font-compact text-greytxt">Имя и
                            фамилия</label>
                        <input id="name" type="text"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <label for="tel" class="block mb-1 text-sm font-normal font-compact text-greytxt">Контактный
                            телефон</label>
                        <input id="tel" type="tel" placeholder="+7 (XXX) XXX-XX-XX"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <label for="email"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">Email</label>
                        <input id="email" type="email"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="font-compact font-medium text-txt text-2xl leading-7 mb-4">Информация о стартапе</h2>
                <div class="grid grid-cols md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-7">
                    <div>
                        <DropdownInput :label="'Выберите направление  вашего проекта'" :options="dropdownList"
                            v-model="dropdownDirection" />
                    </div>

                    <div>
                        <label for="project-name"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">Название проекта</label>
                        <input id="project-name" type="text"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <label for="inn-number"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">ИНН</label>
                        <input id="inn-number" type="number"
                            class="no-spinner block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <label for="project-url" class="block mb-1 text-sm font-normal font-compact text-greytxt">Сайт
                            проекта</label>
                        <input id="project-url" type="text"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <DropdownInput :label="'Стадия готовности решения или продукта'" :options="dropdownList"
                            v-model="dropdownStatus" />
                    </div>

                    <div>
                        <label for="program-source"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">Откуда узнали о
                            программе?</label>
                        <input id="program-source" type="text"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <label for="project-revenue"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">Годовая выручка
                            (руб./год)</label>
                        <input id="project-revenue" type="number"
                            class="no-spinner block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div>
                        <label for="project-mau"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">Активных пользователей в
                            месяц (MAU)</label>
                        <input id="project-mau" type="number"
                            class="no-spinner block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                            required>
                    </div>

                    <div class="md:col-span-2">
                        <label for="project-description"
                            class="block mb-1 text-sm font-normal font-compact text-greytxt">Опишите ваш
                            продукт/технологию</label>
                        <textarea id="project-description" type="text" required placeholder="Мы компания X, помогаем клиентам типа Y в ситуации Z решать проблему P  
с помощью технологии S и получать ценность V"
                            class="block resize-none w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary" />
                    </div>
                </div>
            </div>

            <div>
                <h2 class="font-compact font-medium text-txt text-2xl leading-7 mb-4">Презентация решения или продукта
                </h2>
                <div class="grid grid-cols md:grid-cols-2 grid-cols-1 gap-8 mb-6">
                    <div v-for="(bullet, i) in presentationBullets" :key="i" class="flex items-start gap-4">
                        <div class="w-6 h-6 min-w-6 min-h-6 mt-1">
                            <StarBullet />
                        </div>
                        <p class="font-compact font-medium text-17 leading-6 text-greytxt">{{ bullet }}</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-11">
                <div class="flex flex-col w-full h-full gap-1">
                    <input ref="fileInput" :key="fileInputKey" type="file" accept=".txt,.csv,.xls" class="hidden"
                        @change="handleFileUpload">
                    <div :class="['relative flex-col gap-1 justify-center items-center flex px-4 py-6 bg-[#f2f3f7] rounded-[1.25rem] border border-dashed border-divider/50 cursor-pointer', { 'drag-over': isDragging }]"
                        @click="triggerFileInput" @dragover.prevent @dragenter.prevent="handleDragEnter"
                        @dragleave.prevent="handleDragLeave" @drop.prevent="handleFileDrop">
                        <UploadIcon />
                        <p class="font-normal leading-normal text-center text-txt text-17 font-compact">
                            Переместите файл сюда или
                            <span class="text-[#0070e5] text-17 font-normal font-compact leading-normal cursor-pointer">
                                загрузите вручную
                            </span>
                        </p>
                        <p class="text-xs font-normal leading-snug text-center text-greytxt font-compact flex flex-col">
                            <span>Формат файла: TXT, CSV, XLS. Не более 2 Мб</span>
                        </p>
                    </div>
                </div>

                <div>
                    <label for="captcha" class="block mb-1 text-sm font-normal font-compact text-greytxt">Введите код с
                        изображения</label>
                    <div
                        class="flex items-center justify-between rounded-2xl bg-tertiary border-divider/50 border relative">
                        <input id="project-mau" type="number"
                            class="no-spinner block w-full px-3 outline-none font-compact font-normal text-17 leading-6 bg-tertiary"
                            required>
                        <img src="/captcha.jpg" class="rounded-r-2xl h-13" alt="">
                    </div>
                </div>

                <p class="font-compact font-normal text-sm leading-[1.125rem] text-greytxt">
                    Обработка полученных данных ведется в соответствии с <a class="text-[#0070E5]" href="/">Политикой "Обработка персональных данных" в
                        ПАО "МТС",</a> <a class="text-[#0070E5]" href="/">Политикой "Обработка персональных данных в ООО "Экосистема МТС",</a> а
                    также в рамках <a class="text-[#0070E5]" href="/">Правил участия в проекте "Резидентство MTS StartUp Hub".</a>
                    Предоставленные данные будут использованы исключительно для выстраивания деловых контактов с
                    Заявителем, оценки потенциала сотрудничества и решения о принятии в Программу. Мы также можем
                    сообщать информацию о нашем сотрудничестве Партнерам, список которых размещен в сети "Интернет" по
                    адресу <a class="text-[#0070E5] underline"
                        href="https://startup.mts.ru/third_persons-page">https://startup.mts.ru/third_persons-page.</a>
                </p>

                <button class="font-wide font-bold text-white text-xs uppercase py-[1.625rem] px-[5.75rem] rounded-[1.25rem] bg-brand tracking-[0.05em] w-fit" to="/">
                    Подать заявку
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DropdownInput from '~/components/DropdownInput.vue';
import StarBullet from '~/components/icons/StarBullet.vue';
import UploadIcon from '~/components/icons/UploadIcon.vue';

const fileInput = ref(null)
const fileRef = ref(null)
const fileInputKey = ref(0)
const isDragging = ref(false)

const dropdownList = [
    { label: `0`, value: `0` },
    { label: `1`, value: `1` },
    { label: `2`, value: `2` },
];
const dropdowndirection = ref(null);
const dropdownStatus = ref(null)
const presentationBullets = [
    "Проблема. Какую задачу решает ваш продукт/продукты и для каких сегментов?",
    "Решение. Что из себя представляет ваш продукт? Как решает указанную проблему?",
    "Рынок. Каков объем текущего рынка, рассчитанный через доступные каналы продаж? Каков общий объем, рассчитанный через выручку конкурентов?",
    "Конкуренты. Кто ваши прямые и косвенные конкуренты? Каковы их показатели по динамике, объёму выручки, количеству пользователей?",
    "Команда. Кто входит в команду? Какой опыт и компетенции каждого члена команды помогают вам создавать лучшее решение?",
    "Результаты. Чего вы достигли? Как растёт количество пользователей и выручка в разрезе по месяцам?",
    "Бизнес-модель. Как именно вы зарабатываете деньги (подписка, продажи и т.д.)?",
    "Планы. Каковы ваши дальнейшие шаги по завоеванию большей доли рынка?",
];

const handleDragEnter = () => {
    isDragging.value = true
}

const handleDragLeave = () => {
    isDragging.value = false
}
const triggerFileInput = () => {
    if (fileInput.value) {
        fileInput.value.click()
    }
}

const handleFileDrop = (event) => {
    const file = event.dataTransfer.files[0]
    isDragging.value = false
    processFile(file)
}

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    processFile(file)
}

const processFile = (file) => {
    if (file) {
        const fileType = file.type.split('/')[0];
        const fileSizeMB = file.size / (1024 * 1024);

        const allowedExtensions = ['txt', 'csv', 'xls'];
        const fileName = file.name.toLowerCase();
        const fileExtension = fileName.split('.').pop();

        if (!allowedExtensions.includes(fileExtension)) {
            alert('Файл должен быть в формате TXT, CSV, XLS');
            return;
        }

        if (fileSizeMB > 2) {
            alert('Аудио должно быть не больше 50MB');
            return;
        }

        fileRef.value = file;
    }
}
</script>

<style scoped>
/* Chrome, Safari, Edge */
.no-spinner::-webkit-inner-spin-button,
.no-spinner::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
.no-spinner[type=number] {
    -moz-appearance: textfield;
}
</style>