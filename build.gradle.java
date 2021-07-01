// In the asset pack’s build.gradle file:
apply plugin: 'com.android.asset-pack'

assetPack {
    packName = "asset-pack-name" // Directory name for the asset pack
    dynamicDelivery {
        deliveryType = "[ install-time | fast-follow | on-demand ]"
    }
}
