## Root

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" 
    xmlns:cq="http://www.day.com/jcr/cq/1.0" 
    xmlns:jcr="http://www.jcp.org/jcr/1.0" 
    xmlns:nt="http://www.jcp.org/jcr/nt/1.0" 
    jcr:primaryType="nt:unstructured" 
    jcr:title="Carousel" 
    sling:resourceType="cq/gui/components/authoring/dialog">
    <content 
        jcr:primaryType="nt:unstructured" 
        sling:resourceType="granite/ui/components/coral/foundation/tabs">
        <items jcr:primaryType="nt:unstructured">
        </items>
    </content>
</jcr:root>
```

## Tab

```xml
<tab1
        jcr:primaryType="nt:unstructured" jcr:title="Association Conventions"
        sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
    <items jcr:primaryType="nt:unstructured">
        <column jcr:primaryType="nt:unstructured" sling:resourceType="granite/ui/components/foundation/container">
            <items jcr:primaryType="nt:unstructured">
            </items>
        </column>
    </items>
</tab1>
```

## Fixed Column

```xml
<panel 
    jcr:primaryType="nt:unstructured" 
    jcr:title="Settings" 
    sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
        <items jcr:primaryType="nt:unstructured">
        </items>
</panel>
```

## Nested Multifield

```xml
<nestedmultifield
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
        composite="{Boolean}true"
        fieldLabel="nestedmultifield">
    <field
            jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/coral/foundation/container"
            name="./nestedmultifield">
        <items jcr:primaryType="nt:unstructured">
            <column
                    jcr:primaryType="nt:unstructured"
                    sling:resourceType="granite/ui/components/coral/foundation/container">
                <items jcr:primaryType="nt:unstructured">
                    <item1
                            jcr:primaryType="nt:unstructured"
                          sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
                            fieldDescription="item1"
                            fieldLabel="item1"
                            name="./item1"/>
                    <item2
                            jcr:primaryType="nt:unstructured"
                            sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
                            composite="{Boolean}true"
                            fieldLabel="item2">
                        <field
                                jcr:primaryType="nt:unstructured"
                                sling:resourceType="granite/ui/components/coral/foundation/container"
                                name="./item2">
                            <items jcr:primaryType="nt:unstructured">
                                <column
                                        jcr:primaryType="nt:unstructured"
                                        sling:resourceType="granite/ui/components/coral/foundation/container">
                                    <items jcr:primaryType="nt:unstructured">
                                        <item2_1
                                                jcr:primaryType="nt:unstructured"
                                                sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
                                                fieldDescription="item2_1"
                                                fieldLabel="item2_1"
                                                name="./item2_1"/>
                                    </items>
                                </column>
                            </items>
                        </field>
                    </item2>
                </items>
            </column>
        </items>
    </field>
</nestedmultifield>
```

## Normal Multifield

```xml
<multifield
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/form/multifield"
        composite="{Boolean}true"
        fieldDescription=""
        fieldLabel="multifield">
    <field
            jcr:primaryType="nt:unstructured"
            sling:resourceType="granite/ui/components/coral/foundation/container"
            name="./multifield">
        <items jcr:primaryType="nt:unstructured">
            <column
                    jcr:primaryType="nt:unstructured"
                    sling:resourceType="granite/ui/components/coral/foundation/container">
                <items jcr:primaryType="nt:unstructured">
                </items>
            </column>
        </items>
    </field>
</multifield>
```

## Select with items

```xml
<selectfield
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/form/select"
        fieldDescription=""
        fieldLabel=""
        name="./selectfield">
    <items jcr:primaryType="nt:unstructured">
        <option1
                jcr:primaryType="nt:unstructured"
                text="option1"
                value="option1"/>
        <option2
                jcr:primaryType="nt:unstructured"
                text="option2"
                value="option2"/>
    </items>
</selectfield>
```

## Select with dynamic items

```xml
<selectfield
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/form/select"
    fieldDescription=""
    fieldLabel=""
    name="./selectfield">
    <datasource
        jcr:primaryType="nt:unstructured"
        sling:resourceType="/apps/xxx/datasource/"
        addNone="{Boolean}true"/>
</selectfield>
```

[datasource example]: examples/tags

## RichText

```xml
<text
    jcr:primaryType="nt:unstructured"
    sling:resourceType="cq/gui/components/authoring/dialog/richtext"
    name="./text"
    useFixedInlineToolbar="{Boolean}true">
    <rtePlugins jcr:primaryType="nt:unstructured">
        <format
                jcr:primaryType="nt:unstructured"
                features="*"/>
        <justify
                jcr:primaryType="nt:unstructured"
                features="*"/>
        <links
                jcr:primaryType="nt:unstructured"
                features="modifylink,unlink"/>
        <lists
                jcr:primaryType="nt:unstructured"
                features="*"/>
        <misctools
                jcr:primaryType="nt:unstructured"
                features="*">
            <specialCharsConfig jcr:primaryType="nt:unstructured">
                <chars jcr:primaryType="nt:unstructured">
                    <default_copyright
                            jcr:primaryType="nt:unstructured"
                            entity="&amp;copy;"
                            name="copyright"/>
                    <default_euro
                            jcr:primaryType="nt:unstructured"
                            entity="&amp;euro;"
                            name="euro"/>
                    <default_registered
                            jcr:primaryType="nt:unstructured"
                            entity="&amp;reg;"
                            name="registered"/>
                    <default_trademark
                            jcr:primaryType="nt:unstructured"
                            entity="&amp;trade;"
                            name="trademark"/>
                </chars>
            </specialCharsConfig>
        </misctools>
        <paraformat
                jcr:primaryType="nt:unstructured"
                features="*">
            <formats jcr:primaryType="nt:unstructured">
                <default_p
                        jcr:primaryType="nt:unstructured"
                        description="Paragraph"
                        tag="p"/>
                <default_h1
                        jcr:primaryType="nt:unstructured"
                        description="Heading 1"
                        tag="h1"/>
                <default_h2
                        jcr:primaryType="nt:unstructured"
                        description="Heading 2"
                        tag="h2"/>
                <default_h3
                        jcr:primaryType="nt:unstructured"
                        description="Heading 3"
                        tag="h3"/>
                <default_h4
                        jcr:primaryType="nt:unstructured"
                        description="Heading 4"
                        tag="h4"/>
                <default_h5
                        jcr:primaryType="nt:unstructured"
                        description="Heading 5"
                        tag="h5"/>
                <default_h6
                        jcr:primaryType="nt:unstructured"
                        description="Heading 6"
                        tag="h6"/>
                <default_blockquote
                        jcr:primaryType="nt:unstructured"
                        description="Quote"
                        tag="blockquote"/>
                <default_pre
                        jcr:primaryType="nt:unstructured"
                        description="Preformatted"
                        tag="pre"/>
            </formats>
        </paraformat>
        <table
                jcr:primaryType="nt:unstructured"
                features="*">
            <hiddenHeaderConfig
                    jcr:primaryType="nt:unstructured"
                    hiddenHeaderClassName="cq-wcm-foundation-aria-visuallyhidden"
                    hiddenHeaderEditingCSS="cq-RichText-hiddenHeader--editing"/>
        </table>
        <edit
                jcr:primaryType="nt:unstructured"
                features="*"/>
        <image
                jcr:primaryType="nt:unstructured"
                features="*"/>
        <styles
                jcr:primaryType="nt:unstructured"
                features="*"/>
    </rtePlugins>
    <uiSettings jcr:primaryType="nt:unstructured">
        <cui jcr:primaryType="nt:unstructured">
            <inline
                    jcr:primaryType="nt:unstructured"
                    toolbar="[format#bold,format#italic,format#underline,justify#justifyleft,justify#justifycenter,justify#justifyright,lists#unordered,lists#ordered,lists#outdent,lists#indent,links#modifylink,links#unlink,table#createoredit,#paraformat,image#imageProps,misctools#sourceedit,edit#cut,edit#copy,edit#paste-default,edit#paste-plaintext,edit#paste-wordhtml]">
                <popovers jcr:primaryType="nt:unstructured">
                    <format
                            jcr:primaryType="nt:unstructured"
                            items="[format#bold,format#italic,format#underline]"
                            ref="format"/>
                    <justify
                            jcr:primaryType="nt:unstructured"
                            items="[justify#justifyleft,justify#justifycenter,justify#justifyright]"
                            ref="justify"/>
                    <lists
                            jcr:primaryType="nt:unstructured"
                            items="[lists#unordered,lists#ordered,lists#outdent,lists#indent]"
                            ref="lists"/>
                    <paraformat
                            jcr:primaryType="nt:unstructured"
                            items="paraformat:getFormats:paraformat-pulldown"
                            ref="paraformat"/>
                </popovers>
            </inline>
            <dialogFullScreen
                    jcr:primaryType="nt:unstructured"
                    toolbar="[format#bold,format#italic,format#underline,justify#justifyleft,justify#justifycenter,justify#justifyright,lists#unordered,lists#ordered,lists#outdent,lists#indent,links#modifylink,links#unlink,table#createoredit,#paraformat,image#imageProps,misctools#sourceedit,edit#cut,edit#copy,edit#paste-default,edit#paste-plaintext,edit#paste-wordhtml]">
                <popovers jcr:primaryType="nt:unstructured">
                    <paraformat
                            jcr:primaryType="nt:unstructured"
                            items="paraformat:getFormats:paraformat-pulldown"
                            ref="paraformat"/>
                </popovers>
            </dialogFullScreen>
            <tableEditOptions
                    jcr:primaryType="nt:unstructured"
                    toolbar="[table#insertcolumn-before,table#insertcolumn-after,table#removecolumn,-,table#insertrow-before,table#insertrow-after,table#removerow,-,table#mergecells-right,table#mergecells-down,table#mergecells,table#splitcell-horizontal,table#splitcell-vertical,-,table#selectrow,table#selectcolumn,-,table#ensureparagraph,-,table#modifytableandcell,table#removetable,-,undo#undo,undo#redo,-,table#exitTableEditing,-]"/>
        </cui>
    </uiSettings>
</text>
```

Notes: 

Aply the below css to fix the rich text gray background color on mulitfield.

create /apps/clientlibs/granite/richtext/css/overwrite.css

```css
.cq-dialog-content .rte-ui .rte-toolbar,
.richtext-container .rte-toolbar {
    visibility: visible!important;
}
.richtext-container .coral-RichText-editable,
.cq-dialog-content .coral3-Multifield .coral-RichText{
    background-color: #fff !important;
}
```