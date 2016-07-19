<aura:application >

    <aura:attribute name="native" type="Boolean" default="true"/>

    <h1>{! if(v.native, 'HTML meter', 'Custom c:meter')}</h1>

    <c:xmeterFix value="0.0" native="{!v.native}"/>
    <c:xmeterFix value="0.2" native="{!v.native}"/>
    <c:xmeterFix value="0.4" native="{!v.native}"/>
    <c:xmeterFix value="0.6" native="{!v.native}"/>
    <c:xmeterFix value="0.8" native="{!v.native}"/>
    <c:xmeterFix value="1.0" native="{!v.native}"/>

	<ui:button label="Toggle" press="{!c.doToggle}"/>

</aura:application>