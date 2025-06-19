<script setup>
import DefaultTheme, { VPLink } from 'vitepress/theme'
import { onMounted } from 'vue'
import { VPNavBarSearch } from 'vitepress/theme'


onMounted(() => {
    const untrackedPaths = ['/in-dashboard', '/minidocs/'];

    if (
        untrackedPaths.some(path => window.location.pathname.includes(path)) ||
        window.location.hostname === 'localhost'
    ) {
        return
    }


    window._mfq = window._mfq || [];

    var mf = document.createElement('script');
    mf.type = 'text/javascript'; mf.defer = true;
    mf.src = '//cdn.mouseflow.com/projects/b24688bd-712f-4445-bd16-b89ca6de37c5.js';
    document.getElementsByTagName('head')[0].appendChild(mf);
})
</script>

<style>
.EandoxHomeSearchBar-Container .VPNavBarSearch {
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.EandoxHomeSearchBar-Container .DocSearch-Button {
    padding: 32px;
}

.EandoxHomeSearchBar-Container .DocSearch-Button:not(:hover) {
    border-color: var(--vp-c-brand-2-pale);
}

.EandoxHomeSearchBar-Container .DocSearch-Search-Icon {
    width: 16px;
    height: 16px;
}

.EandoxHomeSearchBar-Container .DocSearch-Button-Placeholder {
    font-size: 16px;
    font-weight: 600;
}

.FakeNav {
    max-width: calc(1152px + 48px);
    margin: 0 auto;
}

.FakeNav-Inner {
    padding: 24px;
    display: flex;
    justify-content: space-between;
}

@media (min-width: 768px) {
    .FakeNav {
        max-width: calc(1152px + 64px);
    }

    .FakeNav-Inner {
        padding: 32px;
    }
}

.HomeLogo {
    width: 120px;
    height: auto;
    margin-left: -2px;
}

.FakeNav .NavItems {
    display: flex;
    flex-direction: row;
}

.FakeNav .NavItem {
    font-size: 14px;
}

.FakeNav .NavItem:last-child {
    margin-left: 16px;
}

</style>

<template>
    <DefaultTheme.Layout>
        <template #home-hero-before>
            <div class="FakeNav">
                <div class="FakeNav-Inner">
                    <img class="HomeLogo" src="/logo.svg" alt="EandoX" />
                    <div class="NavItems">
                        <VPLink href="https://www.eandox.com" class="NavItem">
                            Visit eandox.com
                        </VPLink>

                        <VPLink href="mailto:info@eandox.com?subject=I%20have%20some%20feedback%20on%20the%20docs" class="NavItem">
                            Docs feedback
                        </VPLink>
                    </div>
                </div>
            </div>
        </template>

        <template #home-hero-actions-after>
            <div class="EandoxHomeSearchBar-Container">
                <VPNavBarSearch />
            </div>
        </template>
    </DefaultTheme.Layout>
</template>
