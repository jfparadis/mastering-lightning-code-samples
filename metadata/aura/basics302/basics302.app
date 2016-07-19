<aura:application >

    <aura:attribute name="console" type="String"/>

    <button onclick="{!c.handleClick}">
        Label HTML button
    </button>

    <hr/>

    <ui:button press="{!c.handleClick}" label="Label Lightning ui:button"/>

    <hr/>
    
    <h1>Console Output:</h1>
    <ui:outputTextArea value="{!v.console}"/>

</aura:application>