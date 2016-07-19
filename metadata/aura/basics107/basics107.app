<aura:application >

    <aura:attribute name="native" type="Boolean" default="true"/>

    <h1>{! if(v.native, 'HTML Meter', 'Custom c:meter')}</h1>

    <c:xmeterBug value="0.0" native="{!v.native}"/>
    <c:xmeterBug value="0.2" native="{!v.native}"/>
    <c:xmeterBug value="0.4" native="{!v.native}"/>
    <c:xmeterBug value="0.6" native="{!v.native}"/>
    <c:xmeterBug value="0.8" native="{!v.native}"/>
    <c:xmeterBug value="1.0" native="{!v.native}"/>

    <ui:button label="Toggle" press="{!c.doToggle}"/>

</aura:application>