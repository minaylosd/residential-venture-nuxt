<template>
    <section class="px-5 mx-auto lg:px-9 md:max-w-[1336px] w-full">
        <form class="flex rounded-3xl bg-tertiary justify-between gap-[85px] items-center p-6">
            <div>
                <h3 class="font-wide font-medium text-txt text-2xl leading-7">Подпишитесь на рассылку</h3>
                <p class="font-text font-normal text-sm text-greytxt">Оставайтесь в курсе новых событий MTS StartUp Hub
                </p>
            </div>
            <div class="flex items-center gap-8 grow">
                <input id="email" type="email"
                    class="block w-full px-3 py-[13px] border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl bg-tertiary"
                    required placeholder="Email">
                    <input type="submit" value="Подписаться" class="py-[18px] px-[108px] bg-brand font-wide font-bold text-xs text-white h-fit rounded-2xl uppercase tracking-[0.05em]">
            </div>
        </form>
    </section>
</template>