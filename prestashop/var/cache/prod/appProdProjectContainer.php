<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerEbp8tct\appProdProjectContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerEbp8tct/appProdProjectContainer.php') {
    touch(__DIR__.'/ContainerEbp8tct.legacy');

    return;
}

if (!\class_exists(appProdProjectContainer::class, false)) {
    \class_alias(\ContainerEbp8tct\appProdProjectContainer::class, appProdProjectContainer::class, false);
}

return new \ContainerEbp8tct\appProdProjectContainer(array(
    'container.build_hash' => 'Ebp8tct',
    'container.build_id' => '18d9196f',
    'container.build_time' => 1544622584,
), __DIR__.\DIRECTORY_SEPARATOR.'ContainerEbp8tct');
