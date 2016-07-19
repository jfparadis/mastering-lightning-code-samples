<aura:application >

    <aura:attribute name="items" type="Integer[]" default="0,1,2,3,4,5"/>

    <div>
        <aura:iteration items="0,1,2,3,4,5" var="item">
            <meter value="{!item / 5}" /><br />
        </aura:iteration>
    </div>

    <div>
        <aura:iteration items="{!v.items}" var="item">
            <c:meter value="{!item / 5}"/><br/>
        </aura:iteration>
    </div>

    <ui:button label="Toggle" press="{!c.doToggle}"/>

</aura:application>