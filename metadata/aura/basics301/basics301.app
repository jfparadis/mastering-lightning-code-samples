<aura:application >

    <aura:attribute name="answer" type="Integer" default="0"/>

	<div>
		<label>Result: </label>
    	<span>{!v.answer}</span>
	</div>

	<ui:button label="More" press="{!c.handleMore}"/>
	<ui:button label="Less" press="{!c.handleLess}"/>

</aura:application>