<aura:application >

    <aura:attribute name="current" type="Decimal"/>

    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <h1>Init</h1>
    <div aura:id="content"/>

    <h1>On Change</h1>
    <c:meter value="{!v.current}"/><br/>
    <c:asciiMeter value="{!v.current}"/>

    <div>
	    <ui:button label="Randomize" press="{!c.doRandomize}"/>
	</div>
</aura:application>