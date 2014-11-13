/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.skin = 'bootstrapck';
    config.removePlugins = 'floating-tools, symbol, language';
    config.enterMode = CKEDITOR.ENTER_DIV;
    config.filebrowserImageBrowseUrl = mauticBasePath + '/assets/js/ckeditor/filemanager/index.html?type=Images';
    config.filebrowserImageUploadUrl = mauticBasePath + '/assets/js/ckeditor/filemanager/connectors/php/filemanager.php?command=QuickUpload&type;=Images';

    config.toolbar =
        [
            { name: 'basicstyles', items : [ 'Bold','Italic' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList' ] },
            { name: 'clipboard', items : [ 'Cut', 'Copy', 'Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
            { name: 'tools', items : [ 'Sourcedialog' ] },
        ];

	config.toolbar_advanced =
	[
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
        { name: 'clipboard', items : [ 'Cut', 'Copy', 'Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
        { name: 'insert', items : [ 'Image','Table' ] },
        '/',
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ] },
        { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
        { name: 'tools', items : [ 'Sourcedialog' ] },
        '/',
        { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
        { name: 'colors', items : [ 'TextColor','BGColor' ] }
    ];
};