<template>
    <section class="px-5 mx-auto lg:px-9 md:max-w-[83.5rem] w-full">
        <form class="flex flex-col lg:flex-row rounded-3xl bg-tertiary justify-between gap-4 lg:gap-[5.3125rem] items-center p-6">
            <div>
                <h3 class="font-wide font-medium text-txt text-2xl leading-7 mb-2">Подпишитесь на рассылку</h3>
                <p class="font-text font-normal text-sm text-greytxt">Оставайтесь в курсе новых событий MTS StartUp Hub
                </p>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 grow">
                <input id="email" type="email"
                    class="block w-full px-3 py-[0.8125rem] border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                    required placeholder="Email">
                    <input type="submit" value="Подписаться" class="py-[1.125rem] px-[6.75rem] bg-brand font-wide font-bold text-xs text-white h-fit rounded-2xl uppercase tracking-[0.05em]">
            </div>
        </form>
    </section>
</template>